import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseCatalog,plain} from '../scripts/build-catalog.mjs';
import {selectEntries,readState,stateSearch,rowHTML,fieldHTML} from '../assets/site/library.js';
const markdown=fs.readFileSync(new URL('../README.md',import.meta.url),'utf8');
const catalog=parseCatalog(markdown);
const state=()=>readState('',catalog);

test('every dated README research entry is included once, with its full metadata',()=>{
 const source=[...markdown.matchAll(/^- \*\*(.+?)\*\*[^\n]*\n  \*(\d{4}-\d{2}) · /gm)];
 const research=catalog.entries.filter(e=>e.kind==='Research entry');
 assert.equal(research.length,source.length);
 assert.equal(new Set(catalog.entries.map(e=>e.id)).size,catalog.entries.length);
 for(const m of source){const e=research.find(e=>e.title===plain(m[1]));assert.ok(e,m[1]);assert.equal(e.date,m[2]);}
 for(const e of research.filter(e=>e.collection==='systems'))assert.ok(e.fields.some(f=>f.label==='Agent loop'&&f.value.length>30),e.title);
 assert.ok(!research.some(e=>e.title==='Primary evidence:'));
});
test('resource tables and nested engineering sections are captured',()=>{
 assert.ok(catalog.entries.find(e=>e.title==='Skills Over MCP'&&e.collection==='skills'));
 const ros=catalog.entries.find(e=>e.title==='ROS MCP Server');
 assert.equal(ros.kind,'Resource');assert.equal(ros.year,null);
 assert.ok(ros.ancestors.includes('engineering/7-3/robot-runtimes-and-interfaces'));
 for(const c of catalog.collections)assert.equal(c.count,catalog.entries.filter(e=>e.collection===c.id).length);
 for(const s of catalog.sections)assert.equal(s.count,catalog.entries.filter(e=>e.ancestors.includes(s.id)).length);
});
test('robot-use subcategory retains canonical systems only',()=>{
 const selected=selectEntries(catalog,{...state(),collection:'systems',section:'systems/3-6'});
 assert.ok(selected.length>20);assert.ok(selected.every(e=>e.collection==='systems'&&e.ancestors.includes('systems/3-6')));
 assert.ok(!selected.some(e=>e.title==='GR00T N1'));
});
test('search includes paper IDs and can be combined with year and resource filters',()=>{
 const selected=selectEntries(catalog,{...state(),q:'2609.12394',year:'2026',resource:'paper'});
 assert.equal(selected.length,1);assert.ok(selected[0].title.startsWith('BlueLM-GUI'));
 assert.equal(selectEntries(catalog,{...state(),q:'2609.12394',year:'2025'}).length,0);
});
test('sorting handles undated resources and saved-only results',()=>{
 const selected=selectEntries(catalog,{...state(),sort:'newest'});
 assert.ok(selected[0].date);assert.equal(selected.at(-1).year,null);
 const saved=new Set([catalog.entries[2].id]);
 assert.deepEqual(selectEntries(catalog,{...state(),saved:true},saved).map(e=>e.id),[catalog.entries[2].id]);
});
test('filter URLs round-trip and invalid inputs are bounded',()=>{
 const source={...state(),collection:'systems',section:'systems/3-6',q:'robot + camera',year:'2026',sort:'newest',page:2};
 assert.deepEqual(readState(stateSearch(source),catalog),source);
 const bad=readState('?page=900000&collection=unknown&year=1900&resource=javascript&sort=no',catalog);
 assert.equal(bad.page,10000);assert.equal(bad.collection,'');assert.equal(bad.resource,'');assert.equal(bad.sort,'readme');
});
test('rendering escapes text and turns canonical references into usable entry controls',()=>{
 const e={...catalog.entries[0],title:'<script>alert(1)</script>',notes:'<img onerror=alert(1)>',resources:[]};
 const html=rowHTML(e);assert.ok(!html.includes('<script>'));assert.ok(!html.includes('<img onerror'));
 const related=fieldHTML({value:'Related method',links:[{label:'Agent S3',url:'https://github.com/OpenEnvision/Awesome-Multimodal-Agent#agent-s3'}]},catalog);
 assert.ok(related.includes('data-detail='));assert.ok(related.includes('Agent S3'));
});
test('bookmark storage is isolated from the companion Modeling library',()=>{
 const script=fs.readFileSync(new URL('../assets/site/app.js',import.meta.url),'utf8');
 assert.ok(script.includes('openenvision-agents-reading-list-v1'));
 assert.ok(!script.includes("'openenvision-reading-list-v1'"));
});
