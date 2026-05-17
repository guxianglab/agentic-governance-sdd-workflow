---
name: sdd-draft
description: 根据已批准的需求创建设计草案。
agent: SDD Coordinator
tools: ['agent', 'search', 'edit']
---

确认 `.sdd/REQUIREMENT.md` 存在且已就绪。

使用 SDD Draft Agent 更新 `.sdd/DRAFT.md`。

将 `.sdd/CURSOR.md` 的 phase 设置为 `draft`。

不要实现代码。

结束时给出：

- 推荐方案
- 受影响区域
- 风险
- 给用户的问题
- 是否应运行 `/sdd-review`
