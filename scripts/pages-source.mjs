import fs from 'node:fs/promises';

// Read the repository's chosen source; never change its Pages settings.
const response=await fetch(`${process.env.GITHUB_API_URL}/repos/${process.env.GITHUB_REPOSITORY}/pages`,{
 headers:{Accept:'application/vnd.github+json',Authorization:`Bearer ${process.env.GH_TOKEN}`,'X-GitHub-Api-Version':'2026-03-10'}
});
if(!response.ok&&response.status!==404)throw new Error(`Could not read Pages settings: HTTP ${response.status}`);
const page=response.ok?await response.json():null;
const deploy=page?.build_type==='workflow';
const url=page?.html_url?new URL(page.html_url).href:'';
await fs.appendFile(process.env.GITHUB_OUTPUT,`deploy=${deploy}\nurl=${url}\n`);
console.log(deploy?'GitHub Actions is the publishing source.':page?'Branch publishing selected; GitHub will publish the committed root files.':'Enable Pages in repository Settings, then run this workflow again.');
