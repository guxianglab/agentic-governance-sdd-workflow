---
description: 将原始需求转换为结构化的 SDD requirement 供用户评审。
agent: sdd-coordinator
---

命令参数 `$ARGUMENTS`：原始需求或变更请求

通过 Task 工具调用 `sdd-requirement` 澄清用户请求。

使用 `.sdd/templates/requirement.template.md` 更新 `.sdd/REQUIREMENT.md`。

将 `.sdd/CURSOR.md` 的 phase 设置为 `specify`。

不要实现代码。

结束时给出：

- 需求摘要
- 假设
- 开放问题
- 验收标准
- 在 `/sdd-draft` 之前是否需要用户批准


OpenCode 说明：该文件位于 `.opencode/commands/`，文件名即 slash command 名称。
