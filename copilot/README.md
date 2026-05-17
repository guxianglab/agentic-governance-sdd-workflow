# 适用于 VS Code 中 GitHub Copilot 的 Agentic Governance SDD Workflow

这个包将“Agentic Governance SDD Workflow”封装为一个适用于 VS Code GitHub Copilot 的工作区定制方案。

## 包含内容

```text
.github/
  agents/      # VS Code Copilot 自定义 agent，包括仅供子 agent 使用的角色
  prompts/     # Slash 命令，例如 /sdd-specify、/sdd-rfc、/sdd-run-sprint
  copilot-instructions.md
AGENTS.md      # 共享仓库指令上下文，也适用于其他编码 agent
.sdd/
  CURSOR.md
  REQUIREMENT.md
  DRAFT.md
  RFC.md
  PLAN.md
  TASKS.md
  REVIEWS.md
  CHECKLIST.md
  templates/
  tasks/
  reviews/
  rules/
  scripts/
```

## 快速开始

1. 将所有文件复制到你的仓库根目录。
2. 在 VS Code 中打开该仓库文件夹。
3. 打开 GitHub Copilot Chat。
4. 将下列 prompt 文件作为 slash 命令运行：
   - `/sdd-specify`
   - `/sdd-draft`
   - `/sdd-review`
   - `/sdd-rfc`
   - `/sdd-run-sprint`
   - `/sdd-sync-state`
   - `/sdd-close-sprint`
5. 如果要走完整工作流，选择 **SDD Coordinator** 自定义 agent，并从 `/sdd-start` 开始。

## 设计原则

这不是一个全自动工作流引擎，而是一种原生面向 Copilot 的工作模式，使用了：

- 自定义 agents 来提供稳定角色与工具边界
- prompt 文件来提供可重复使用的工作流入口
- `.sdd/` 文件来保存持久化状态
- tasks、reviews、checklist 和 rule-candidates 来实施治理
- 在重大阶段转换前设置显式的用户确认点

## 推荐用法

当你希望 Copilot 像一个受治理的多 agent 工程团队一样工作时，可以使用这个包：

```text
用户需求
  -> 需求澄清
  -> draft
  -> 架构/安全评审
  -> RFC/PLAN/TASKS
  -> 已排程的叶子 TK 执行
  -> CR 评审循环
  -> 交付/状态同步
  -> 关闭 sprint 或进入下一个 sprint
```
