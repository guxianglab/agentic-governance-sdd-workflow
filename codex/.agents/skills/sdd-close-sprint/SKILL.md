---
name: sdd-close-sprint
description: 运行 sprint 退出检查，提炼经验，并准备下一个 sprint 或归档。 Use this skill explicitly as the Codex replacement for the `/sdd-close-sprint` workflow command.
---

# sdd-close-sprint

This is a Codex Skill version of the original `/sdd-close-sprint` SDD command.

Before acting, read `AGENTS.md` and `.sdd/CURSOR.md`. Prefer using the `sdd_coordinator` custom agent as the orchestrator and delegate to focused subagents when useful.

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
