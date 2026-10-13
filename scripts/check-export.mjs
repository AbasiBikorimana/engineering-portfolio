import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
const root=resolve('out');
async function walk(dir){const result=[];for(const item of await readdir(dir,{withFileTypes:true})){const p=join(dir,item.name);if(item.isDirectory())result.push(...await walk(p));else if(p.endsWith('.html'))result.push(p);}return result;}
const files=await walk(root);let links=0,assets=0;const errors=[];
for(const file of files){const html=await readFile(file,'utf8');const rel=file.slice(root.length);const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(!/<html[^>]*lang="en"/.test(html))errors.push(`${rel}: missing language`);
 if(!/<title>[^<]+<\/title>/.test(html))errors.push(`${rel}: missing title`);
 if((html.match(/<h1\b/g)||[]).length!==1)errors.push(`${rel}: expected one H1`);
 if(!html.includes('id="main"')||!html.includes('Skip to content'))errors.push(`${rel}: missing skip target/link`);
 if(new Set(ids).size!==ids.length)errors.push(`${rel}: duplicate IDs`);
 for(const m of html.matchAll(/<(a|script|img|link)\b[^>]*?\b(href|src)="([^\"]+)"/g)){
  const [_,tag,attr,raw]=m;const href=raw.replaceAll('&amp;','&');if(/^(https?:|mailto:|data:|tel:)/.test(href))continue;
  if(href.startsWith('#')){if(!ids.includes(href.slice(1)))errors.push(`${rel}: missing fragment ${href}`);continue;}
  const [path,fragment]=href.split('#');const clean=path.split('?')[0];if(!clean)continue;
  let target=clean.startsWith('/')?join(root,decodeURIComponent(clean)):resolve(dirname(file),decodeURIComponent(clean));
  try{const s=await stat(target);if(s.isDirectory())target=join(target,'index.html');await stat(target);if(fragment&&target.endsWith('.html')){const dest=await readFile(target,'utf8');if(!dest.includes(`id="${fragment}"`))errors.push(`${rel}: missing fragment ${href}`);}}catch{errors.push(`${rel}: broken ${attr} ${href}`);}
  if(tag==='a')links++;else assets++;
 }
}
const expected=['index.html','projects/index.html','experience/index.html','skills/index.html','about/index.html','contact/index.html','404.html','projects/lunar-rover/index.html','projects/bloxshade/index.html','projects/unity-compute/index.html','projects/unreal-cpp/index.html'];
for(const page of expected){try{await stat(join(root,page));}catch{errors.push(`Missing expected page ${page}`);}}
try{await stat(join(root,'projects/component-placement/index.html'));errors.push('Removed component-placement route still exists in export');}catch(error){if(error.code!=='ENOENT')throw error;}
const resume=await readFile(join(root,'Abasi-Bikorimana-Resume.pdf'));if(resume.subarray(0,5).toString()!=='%PDF-')errors.push('Resume is not a valid PDF header');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log(`PASS: ${files.length} HTML files; ${links} internal links; ${assets} local asset references; titles, H1, IDs, skip navigation, case-study routes, and resume checked.`);
