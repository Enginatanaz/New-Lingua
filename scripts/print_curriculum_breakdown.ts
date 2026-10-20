import fs from 'fs';

const data = JSON.parse(fs.readFileSync('all_488_titles.json', 'utf8'));

let currentMod = '';
data.forEach((item: any) => {
  if (item.moduleName !== currentMod) {
    currentMod = item.moduleName;
    console.log(`\n=== [${item.level}] ${currentMod} ===`);
  }
  console.log(`  #${item.id} [${item.code}] ${item.title}`);
});
