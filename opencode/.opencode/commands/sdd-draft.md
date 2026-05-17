---
description: 根据已批准的需求创建设计草案。
agent: sdd-coordinator
---

确认 `.sdd/REQUIREMENT.md` 存在且已就绪。

通过 Task 工具调用 `sdd-draft` 更新 `.sdd/DRAFT.md`。

将 `.sdd/CURSOR.md` 的 phase 设置为 `draft`。

不要实现代码。

结束时给出：

- 推荐方案
- 受影响区域
- 风险
- 给用户的问题
- 是否应运行 `/sdd-review`


OpenCode 说明：该文件位于 `.opencode/commands/`，文件名即 slash command 名称。
