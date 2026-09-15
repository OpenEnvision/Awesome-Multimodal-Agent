import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const readme=await fs.readFile(path.join(root,'README.md'),'utf8');
const html=await fs.readFile(path.join(root,'index.html'),'utf8');
assert.ok(!/\{\{[A-Z_]+\}\}/.test(html),'Root index must be fully rendered');
assert.ok(!html.includes('./website/'),'Root entry must not depend on a nested web root');
for(const directory of [root,path.join(root,'dist')]) {
 assert.equal(await fs.readFile(path.join(directory,'index.html'),'utf8'),html);
 for(const file of ['.nojekyll','robots.txt','sitemap.xml'])await fs.access(path.join(directory,file));
 const pending=['index.html','assets/site/app.js','assets/site/library.js'];
 const visited=new Set();
 while(pending.length) {
  const file=pending.pop();
  if(visited.has(file))continue;
  visited.add(file);
  const content=await fs.readFile(path.join(directory,file),'utf8');
  const urls=[...content.matchAll(/(?:src|href)="(\.\/[^"#?]+)"|(?:from\s*|new URL\()['"](\.\/[^'"]+)['"]/g)].map(m=>m[1]??m[2]);
  for(const url of urls) {
   const target=path.normalize(path.join(path.dirname(file),url));
   await fs.access(path.join(directory,target));
   if(target.endsWith('.js'))pending.push(target);
  }
 }
}
for(const [,file] of readme.matchAll(/src="(assets\/[^"#?]+)"/g))await fs.access(path.join(root,file));
for(const excluded of ['README.md','website','scripts','.git','output','tmp']) {
 await assert.rejects(fs.access(path.join(root,'dist',excluded)),`${excluded} should not be in the deployment artifact`);
}
console.log('Root entry, runtime dependencies, README logo, and isolated deployment artifact verified.');
