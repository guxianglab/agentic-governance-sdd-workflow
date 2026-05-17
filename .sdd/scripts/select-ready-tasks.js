#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const tasksPath = path.join(process.cwd(), '.sdd/TASKS.md');
if (!fs.existsSync(tasksPath)) {
  console.error('缺失 .sdd/TASKS.md');
  process.exit(1);
}

const text = fs.readFileSync(tasksPath, 'utf8');
const lines = text.split(/\r?\n/);
const ready = lines.filter(line => /\|\s*TK-\d+\s*\|/.test(line) && /\|\s*ready\s*\|/.test(line));

if (ready.length === 0) {
  console.log('未找到 ready 状态的 TK。');
  process.exit(0);
}

console.log('ready TK 候选项：');
for (const line of ready.slice(0, 4)) {
  console.log(line);
}
