import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO = 'https://github.com/OpenEnvision/Awesome-Multimodal-Agent';
const definitions = [
  [2, 'surveys', 'Surveys', 'Surveys and Perspectives', 'Field guides, perspectives, and the evidence behind multimodal agency.'],
  [3, 'systems', 'Agent systems', 'End-to-End Agent Systems', 'Goal-directed systems that perceive, act, and use returned feedback.'],
  [4, 'models', 'Models & components', 'Agent Models, Policies, and Components', 'Interactive models, action policies, memory, and reusable components.'],
  [5, 'methods', 'Learning & planning', 'Agent Learning, Planning, and World-Model Methods', 'Tool use, learning, world models, and coordination algorithms.'],
  [6, 'benchmarks', 'Benchmarks', 'Benchmarks, Datasets, and Environments', 'Tasks, datasets, and environments for evaluating agent capabilities.'],
  [7, 'engineering', 'Engineering', 'Engineering Resources', 'Maintained runtimes, execution backends, evaluation tools, and protocols.'],
  [8, 'skills', 'Agent skills', 'Multimodal Agent Skills', 'Portable procedures and inspectable skill packages for agent workflows.'],
  [9, 'related', 'Related libraries', 'Related Lists', 'Companion libraries for exploring neighboring research areas.']
];
const slug = text => text.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s+/g, '-');
const hash = text => createHash('sha256').update(text).digest('hex');
const badgeToLabel = text => text.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1');
export const plain = text => badgeToLabel(text).replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/<[^>]*>/g, '').replace(/\*\*|`/g, '').replace(/\s+/g, ' ').trim();
function links(text, sectionAnchor) {
  const output = [];
  for (const m of badgeToLabel(text).matchAll(/\[([^\]]+)\]\(([^\s)]+)\)/g)) {
    let url=m[2];
    if (url.startsWith('#')) url=REPO+url;
    else if (!/^https?:\/\//i.test(url)) url=REPO+'/blob/main/'+url;
    if (new URL(url).hostname==='img.shields.io') continue;
    let label=plain(m[1]);
    if (/^arxiv\s|^paper$/i.test(label)) label='Paper';
    if (/^github$/i.test(label)) label='Code';
    if (!output.some(r=>r.url===url)) output.push({label,url});
  }
  return output;
}

export function parseCatalog(markdown) {
  const collections=definitions.map(([number,id,label,fullName,description])=>({number,id,label,fullName,description,count:0}));
  const sections=[], entries=[];
  let collection=null, currentSection=null, currentSubsection=null, tableHeaders=null;
  const lines=markdown.split(/\r?\n/);
  function place(record,line,primary) {
    const ancestors=[currentSection?.id,currentSubsection?.id].filter(Boolean);
    const section=currentSubsection??currentSection;
    const id=hash(collection.id+'|'+record.title+'|'+primary).slice(0,16);
    if (entries.some(e=>e.id===id)) throw new Error('Duplicate catalog record: '+record.title);
    entries.push({id,collection:collection.id,section:section?.id??collection.id,path:[currentSection?.label,currentSubsection?.label].filter(Boolean),ancestors,sourceLine:line+1,sourceUrl:`${REPO}/blob/main/README.md?plain=1#L${line+1}`, ...record});
  }
  for (let i=0;i<lines.length;i++) {
    const line=lines[i];
    if (/^## /.test(line)) {
      const number=Number(line.match(/^## (\d+)\./)?.[1]);
      collection=collections.find(c=>c.number===number)??null;
      currentSection=currentSubsection=tableHeaders=null;
      continue;
    }
    if (!collection) continue;
    const h=line.match(/^(###|####) (.+)$/);
    if (h) {
      const level=h[1].length, number=h[2].match(/^(\d+\.\d+) /)?.[1];
      const label=h[2].replace(/^\d+\.\d+ /,'');
      const parent=level===3?collection.id:currentSection?.id??collection.id;
      const id=level===3?`${parent}/${number?.replace('.','-')??slug(label)}`:`${parent}/${slug(label)}`;
      const next={id,label,number,level,collection:collection.id,parent,count:0};
      sections.push(next);
      if (level===3){currentSection=next;currentSubsection=null;}else currentSubsection=next;
      tableHeaders=null;
      continue;
    }
    const title=line.match(/^- \*\*(.*?)\*\*/);
    if (collection.number<=6 && title && /^  \*\d{4}-\d{2} · /.test(lines[i+1]??'')) {
      const start=i, body=[];
      while (/^  \S/.test(lines[i+1]??'')) body.push(lines[++i].trim());
      const date=body[0].match(/^\*(\d{4}-\d{2}) · (.*?)\*/);
      const metadata=body.join('\n').replace(/^\*.*?\*\s*—\s*/,'');
      const fields=[{label:'Title',value:plain(title[1])},{label:'First public release',value:date[1]},{label:'Publication status',value:date[2]}];
      for (const f of metadata.matchAll(/\*\*([^*]+):\*\*\s*([\s\S]*?)(?=\s*(?:—\s*)?\*\*[^*]+:\*\*|$)/g)) {
        fields.push({label:f[1],value:plain(f[2]).replace(/\s*—\s*$/,''),links:links(f[2])});
      }
      const resources=links(line);
      const notes=['Scope','Agent loop','Role','Contribution','Evaluates'].map(label=>fields.find(f=>f.label===label)?.value).find(Boolean)??'';
      place({title:plain(title[1]),date:date[1],year:Number(date[1].slice(0,4)),venue:date[2],notes,tasks:fields.find(f=>f.label==='Capabilities')?.value??'',resources,fields,kind:'Research entry',anchor:line.match(/<a id="([^"]+)"/i)?.[1]??null},start,resources[0]?.url??'');
      continue;
    }
    if (collection.number>=7 && line.startsWith('|')) {
      const cells=line.split(/(?<!\\)\|/).slice(1,-1).map(c=>c.trim());
      if (cells.every(c=>/^:?-+:?$/.test(c))) continue;
      if (['Resource','Collection','Repository'].includes(cells[0])) {tableHeaders=cells;continue;}
      if (!tableHeaders) continue;
      const fields=cells.map((c,j)=>({label:tableHeaders[j],value:plain(c),links:links(c)}));
      const resources=links(cells.at(-1));
      if (!resources.length) throw new Error(`Resource without links at README line ${i+1}`);
      const notes=fields.find(f=>['Primary use','Why it matters','Scope','Representative installable skills'].includes(f.label))?.value??'';
      place({title:plain(cells[0]),date:'',year:null,venue:fields.find(f=>['Type','Role','Provenance'].includes(f.label))?.value??collection.fullName,notes,tasks:'',resources,fields,kind:'Resource',anchor:null},i,resources[0].url);
    } else if (line.trim()) tableHeaders=null;
  }
  for (const c of collections) c.count=entries.filter(e=>e.collection===c.id).length;
  for (const s of sections) s.count=entries.filter(e=>e.ancestors.includes(s.id)).length;
  const years=[...new Set(entries.map(e=>e.year).filter(Boolean))].sort((a,b)=>b-a);
  return {collections,sections,years,entries,sourceHash:hash(markdown),updated:markdown.match(/<strong>(\d{4}-\d{2}-\d{2})<\/strong>/)?.[1]??null};
}

if (process.argv[1]===fileURLToPath(import.meta.url)) {
  const markdown=await fs.readFile(path.join(ROOT,'README.md'),'utf8');
  const catalog=parseCatalog(markdown);
  const expected=(markdown.match(/^- \*\*.+\n  \*\d{4}-\d{2} · /gm)??[]).length;
  const actual=catalog.entries.filter(e=>e.kind==='Research entry').length;
  if(actual!==expected) throw new Error(`Research coverage mismatch: ${actual}/${expected}`);
  await fs.writeFile(path.join(ROOT,'assets/site/catalog.json'),JSON.stringify(catalog,null,2)+'\n');
  console.log(`Catalog: ${actual} research entries + ${catalog.entries.length-actual} resources; ${catalog.collections.length} collections.`);
}
