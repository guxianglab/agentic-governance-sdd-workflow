#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sprint = process.argv[2] || 'S001';
const dir = path.join(process.cwd(), '.sdd/sprints', sprint);
if (!fs.existsSync(dir)) {
  console.error(`未找到 Sprint 文件夹：${dir}`);
  process.exit(1);
}

const archiveDir = path.join(process.cwd(), '.sdd/archive');
fs.mkdirSync(archiveDir, { recursive: true });

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const target = path.join(archiveDir, `${sprint}-${stamp}.txt`);

const files = [
  '.sdd/CURSOR.md',
  '.sdd/TASKS.md',
  '.sdd/REVIEWS.md',
  `.sdd/sprints/${sprint}/RETRO.md`
];

let out = `${sprint} 的归档，时间 ${new Date().toISOString()}\n\n`;
for (const rel of files) {
  const p = path.join(process.cwd(), rel);
  if (fs.existsSync(p)) {
    out += `\n--- ${rel} ---\n`;
    out += fs.readFileSync(p, 'utf8');
    out += '\n';
  }
}

fs.writeFileSync(target, out, 'utf8');
console.log(`已将 sprint 归档到 ${target}`);
