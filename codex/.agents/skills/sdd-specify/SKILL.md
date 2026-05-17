---
name: sdd-specify
description: 将原始需求转换为结构化的 SDD requirement 供用户评审。 Use this skill explicitly as the Codex replacement for the `/sdd-specify` workflow command.
---

# sdd-specify

This is a Codex Skill version of the original `/sdd-specify` SDD command.

Before acting, read `AGENTS.md` and `.sdd/CURSOR.md`. Prefer using the `sdd_coordinator` custom agent as the orchestrator and delegate to focused subagents when useful.

使用 SDD Requirement Agent 澄清用户请求。

使用 `.sdd/templates/requirement.template.md` 更新 `.sdd/REQUIREMENT.md`。

将 `.sdd/CURSOR.md` 的 phase 设置为 `specify`。

不要实现代码。

结束时给出：

- 需求摘要
- 假设
- 开放问题
- 验收标准
- 在 `/sdd_draft` 之前是否需要用户批准
