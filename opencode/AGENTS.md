# OpenCode Project Rules: Agentic Governance SDD Workflow

这些说明适用于本仓库，并会被 OpenCode 作为项目级规则读取。

## OpenCode 配置入口

- 项目级规则：`AGENTS.md`
- 项目级配置：`opencode.json`
- 自定义 agents：`.opencode/agents/*.md`
- 自定义 slash commands：`.opencode/commands/*.md`
- 可复用技能：`.opencode/skills/sdd-governance/SKILL.md`
- SDD 持久化状态：`.sdd/`

## 运行模型

使用 SDD：Specify -> Draft -> Review -> RFC -> Sprint Execution -> Review Loop -> Delivery Sync -> Retrospective。

不要从模糊需求直接跳到代码实现。请维护 `.sdd/` 状态文件。

## 推荐入口

在 OpenCode TUI 中使用：

- `/sdd-start`：启动或恢复流程
- `/sdd-specify`：澄清需求
- `/sdd-draft`：生成设计草案
- `/sdd-review`：架构与安全评审
- `/sdd-rfc`：生成 RFC/PLAN/TASKS/CURSOR
- `/sdd-run-sprint`：运行一轮 sprint 执行循环
- `/sdd-sync-state`：状态对账
- `/sdd-close-sprint`：关闭或复盘 sprint

也可以手动 @mention subagent，例如 `@sdd-security-reviewer`，但治理流程优先通过 `sdd-coordinator` 调度。

## 必需的状态文件

- `.sdd/CURSOR.md`：当前阶段、sprint、活动 TK、活动 CR、下一步动作
- `.sdd/REQUIREMENT.md`：已批准或待定的需求
- `.sdd/DRAFT.md`：设计草案
- `.sdd/RFC.md`：已批准的执行提案
- `.sdd/PLAN.md`：里程碑与实施计划
- `.sdd/TASKS.md`：任务树与 TK 状态
- `.sdd/REVIEWS.md`：评审索引
- `.sdd/CHECKLIST.md`：交付与评审检查清单

## 任务规则

- 只实现叶子 TK。
- 每个叶子 TK 都必须定义写入范围。
- 未经用户批准且未更新 TASKS/CURSOR 时，不要修改写入范围之外的文件。
- 只有在依赖满足且写入范围不冲突时，才允许并行工作。
- 一个批次通常最多包含 2-4 个叶子 TK。

## 评审规则

- 每个完成的叶子 TK 都必须有对应的 CR 文件。
- 发现项必须分类为 accepted 或 rejected。
- 被 accepted 的发现项必须修复并重新检查。
- 重复出现的高影响问题应升级为 rule-candidates。
- 如果评审循环超过 5 轮，停止并请求人工评审。

## 交付规则

关闭某个 TK 之前，请同步：

- TASKS 状态
- REVIEWS / CR 状态
- CHECKLIST 完成状态
- CURSOR 下一步动作
- 如果所有子项都已完成且父级验证通过，则同步父级 TK 状态

## OpenCode agent 使用约定

- `sdd-coordinator` 是主 agent，负责调用其他 subagents。
- `sdd-implementer` 可以修改代码，但必须遵守 TK 写入范围。
- `sdd-architecture-reviewer` 与 `sdd-security-reviewer` 是只读评审者。
- `sdd-code-reviewer` 默认不修改源代码，只创建或更新 CR/REVIEWS。
- `sdd-delivery` 负责状态同步与交付验证。
