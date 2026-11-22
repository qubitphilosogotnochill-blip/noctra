import fs from 'fs';
import path from 'path';

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.html')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles('./src');
files.push('./index.html');

const regex = /photo-[a-zA-Z0-9-]+/g;
const foundImages = [];
const imageToFileMap = {};

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    const photoId = match[0];
    foundImages.push(photoId);
    if (!imageToFileMap[photoId]) {
      imageToFileMap[photoId] = [];
    }
    imageToFileMap[photoId].push(file);
  }
}

console.log(`Scanned ${files.length} source files.`);
console.log(`Total image instances found in code: ${foundImages.length}`);

// Check uniqueness
const duplicates = [];
const counts = {};

for (const id of foundImages) {
  counts[id] = (counts[id] || 0) + 1;
}

for (const [id, count] of Object.entries(counts)) {
  if (count > 1) {
    duplicates.push({ id, count, files: imageToFileMap[id] });
  }
}

if (duplicates.length > 0) {
  console.error(`\nFAIL: Found ${duplicates.length} duplicated image(s):`);
  duplicates.forEach((d) => {
    console.error(`- ${d.id}: repeated ${d.count} times in:`, d.files);
  });
  process.exit(1);
} else {
  console.log(`\nSUCCESS: ALL ${foundImages.length} IMAGES ACROSS THE PROJECT ARE 100% COMPLETELY UNIQUE!`);
  console.log('Zero image repetition verified.');
}
