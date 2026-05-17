---
name: sdd-close-sprint
description: 运行 sprint 退出检查，提炼经验，并准备下一个 sprint 或归档。
disable-model-invocation: true
allowed-tools: Agent(sdd-coordinator), Read, Glob, Grep, Bash, Edit, Write
---

# sdd-close-sprint

This skill is the Claude Code version of the original `/sdd-close-sprint` SDD command.

Delegate orchestration to the `sdd-coordinator` subagent when possible. Before acting, read `CLAUDE.md` and `.sdd/CURSOR.md`.

运行 Sprint 退出检查。

任务：

1. 确认当前 sprint 中没有遗漏的已就绪叶子 TK，除非它们是有意延期。
2. 确认所有已完成 TK 都有已解决的 CR。
3. 确认 checklist 一致。
4. 提炼经验和团队实践。
5. 如已批准，则提升高影响的 rule candidates。
6. 更新 `.sdd/sprints/S001/RETRO.md` 或当前 sprint 的 retro。
7. 询问用户是否要：
   - 退出 Sprint
   - 初始化下一个 Sprint
   - 重新打开规划
