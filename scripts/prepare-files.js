import fs from 'fs';
import path from 'path';

function getFilesToCommit(dir, baseDir = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === 'dist' || file === '.git' || file === 'scripts') continue;
    const fullPath = path.join(dir, file);
    const relPath = path.join(baseDir, file).replace(/\\/g, '/');
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFilesToCommit(fullPath, relPath));
    } else {
      results.push({
        path: relPath,
        content: fs.readFileSync(fullPath, 'utf8')
      });
    }
  }
  return results;
}

const files = getFilesToCommit('.');
console.log(`Prepared ${files.length} files to commit.`);
files.forEach(f => console.log(' - ' + f.path));

fs.writeFileSync('scripts/files-payload.json', JSON.stringify(files));
