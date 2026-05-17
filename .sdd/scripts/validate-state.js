#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const required = [
  '.sdd/CURSOR.md',
  '.sdd/REQUIREMENT.md',
  '.sdd/DRAFT.md',
  '.sdd/RFC.md',
  '.sdd/PLAN.md',
  '.sdd/TASKS.md',
  '.sdd/REVIEWS.md',
  '.sdd/CHECKLIST.md',
  '.github/copilot-instructions.md'
];

let ok = true;

for (const rel of required) {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) {
    console.error(`缺失：${rel}`);
    ok = false;
  }
}

const agentsDir = path.join(root, '.github/agents');
const promptsDir = path.join(root, '.github/prompts');

const agents = fs.existsSync(agentsDir)
  ? fs.readdirSync(agentsDir).filter(f => f.endsWith('.agent.md'))
  : [];
const prompts = fs.existsSync(promptsDir)
  ? fs.readdirSync(promptsDir).filter(f => f.endsWith('.prompt.md'))
  : [];

if (agents.length === 0) {
  console.error('在 .github/agents/*.agent.md 中缺失 Copilot 自定义 agents');
  ok = false;
}

if (prompts.length === 0) {
  console.error('在 .github/prompts/*.prompt.md 中缺失 Copilot prompt 文件');
  ok = false;
}

if (ok) {
  console.log('SDD 状态验证通过。');
  console.log(`Agents：${agents.length}`);
  console.log(`Prompts：${prompts.length}`);
} else {
  process.exit(1);
}
