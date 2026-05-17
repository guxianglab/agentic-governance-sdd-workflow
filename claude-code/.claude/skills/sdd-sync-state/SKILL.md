---
name: sdd-sync-state
description: 在实现或评审之后对 SDD 状态文件进行对账。
disable-model-invocation: true
allowed-tools: Agent(sdd-coordinator), Read, Glob, Grep, Bash, Edit, Write
---

# sdd-sync-state

This skill is the Claude Code version of the original `/sdd-sync-state` SDD command.

Delegate orchestration to the `sdd-coordinator` subagent when possible. Before acting, read `CLAUDE.md` and `.sdd/CURSOR.md`.

使用 SDD Delivery Agent 对以下内容进行对账：

- `.sdd/CURSOR.md`
- `.sdd/TASKS.md`
- `.sdd/REVIEWS.md`
- `.sdd/CHECKLIST.md`
- `.sdd/tasks/*.md`
- `.sdd/reviews/*.md`

报告不一致项，并在可行时修复；如果需要决策，则询问用户。
