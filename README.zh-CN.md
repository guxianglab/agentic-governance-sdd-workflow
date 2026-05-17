# Agentic Governance SDD Workflow

> 一套生产级、多智能体软件开发工作流，内置治理机制，已适配主流 AI 编码助手。

[English](./README.md) | 中文

---

## 这是什么

大多数 AI 编码工作流是一次性的：你输入 prompt，agent 写代码，然后上线。这个项目采用不同的思路。它将结构化、受治理的多智能体软件开发带入你的 AI 编码助手，提供显式评审关卡、持久化状态、审计追踪和完整的 Sprint 生命周期。

可以把它理解为：把资深工程团队的纪律性赋予你的 AI agent。需求在设计前明确，设计在实现前评审，代码在合并前经历 CR，规则会随时间积累沉淀。

---

## 为什么存在

| 问题 | 解决方式 |
|---|---|
| Agent 会捏造需求 | `/sdd-specify` 在开始设计前强制确认 |
| 写代码前没有设计 | `/sdd-draft` 加架构与安全评审关卡 |
| 没有可追溯性 | 持久化 `.sdd/` 状态：REQUIREMENT → DRAFT → RFC → PLAN → TASKS → REVIEWS |
| 评审容易被跳过 | 强制 CR 循环，区分 accepted 和 rejected 发现项 |
| Agent 容易丢上下文 | `CURSOR.md` 记录工作流当前位置 |
| 规则无法沉淀 | 高影响发现项升级为 `rule-candidates`，再进入 `accepted-rules` |
| 平台绑定严重 | 同一套工作流适配 Claude Code、Codex、Copilot、OpenCode |

---

## 工作流概览

```text
用户需求
  └─> /sdd-specify      — 澄清并确认需求
        └─> /sdd-draft        — 架构草案
              └─> /sdd-review       — 架构 + 安全评审
                    └─> /sdd-rfc          — RFC → PLAN → TASKS → Sprint
                          └─> /sdd-run-sprint   — 执行叶子任务并进入 CR 循环
                                └─> /sdd-sync-state  — 同步状态文件
                                      └─> /sdd-close-sprint — 关闭或进入下一 Sprint
```

每次阶段转换都需要用户显式确认，不会自动跳过任何关卡。

---

## Agent 角色

| Agent | 职责 | 写入范围 |
|---|---|---|
| `sdd-coordinator` | 编排完整工作流、控制关卡和用户确认 | `.sdd/CURSOR.md` |
| `sdd-requirement` | 澄清并结构化需求 | `.sdd/REQUIREMENT.md` |
| `sdd-draft` | 产出架构设计文档 | `.sdd/DRAFT.md` |
| `sdd-architecture-reviewer` | 只读架构评审 | `.sdd/REVIEWS.md` |
| `sdd-security-reviewer` | 只读安全评审 | `.sdd/REVIEWS.md` |
| `sdd-scheduler` | 选择已就绪的叶子任务 | `.sdd/TASKS.md`, `.sdd/CURSOR.md` |
| `sdd-implementer` | 在限定写入范围内执行任务 | 源代码文件 |
| `sdd-code-reviewer` | 创建 CR 并记录发现项 | `.sdd/reviews/CR-*.md` |
| `sdd-delivery` | 同步 TASKS / REVIEWS / CHECKLIST / CURSOR | `.sdd/` 状态文件 |

---

## 仓库结构

```text
agentic-governance-sdd-workflow/
│
├── .sdd/                          # 共享持久化工作流状态
│   ├── CURSOR.md                  # 工作流当前位置
│   ├── REQUIREMENT.md             # 已确认需求
│   ├── DRAFT.md                   # 架构草案
│   ├── RFC.md                     # RFC 文档
│   ├── PLAN.md                    # 实现计划
│   ├── TASKS.md                   # 任务注册表
│   ├── REVIEWS.md                 # 评审注册表
│   ├── CHECKLIST.md               # 交付检查单
│   ├── templates/                 # 各类制品模板
│   ├── tasks/                     # 独立任务文件
│   ├── reviews/                   # 独立 CR 文件
│   ├── rules/                     # 规则候选与已接受规则
│   ├── scripts/                   # 辅助脚本
│   └── sprints/                   # Sprint 归档
│
├── docs/sdd/
│   └── workflow-overview.md       # 工作流说明文档
│
├── claude-code/                   # Claude Code 版本
├── codex/                         # OpenAI Codex 版本
├── copilot/                       # GitHub Copilot 版本
└── opencode/                      # OpenCode 版本
```

---

## 快速开始

### GitHub Copilot（VS Code）
```bash
cp -r copilot/. /your/repo/
# 在 VS Code 中打开仓库
# 打开 GitHub Copilot Chat
# 选择 SDD Coordinator，然后输入：/sdd-start <你的需求>
```

### Claude Code
```bash
cp -r claude-code/. /your/repo/
# cd /your/repo && claude
# 运行 /agents 确认子 agent 可见
# 输入：/sdd-start <你的需求>
```

### OpenAI Codex
```bash
cp -r codex/. /your/repo/
# 信任仓库以加载 .codex/ 配置
# 输入：Use $sdd-start for: <你的需求>
```

### OpenCode
```bash
cp -r opencode/. /your/repo/
# cd /your/repo && opencode
# 输入：/sdd-start <你的需求>
```

---

## 治理机制

### 持久化状态
`.sdd/` 目录持久化保存所有工作流制品。即使 agent 丢失上下文，也可以通过读取 `CURSOR.md` 和相关状态文件恢复。

### 评审关卡
每份设计都必须先经过两个只读 agent 的评审，分别覆盖架构和安全。在评审阶段，任何 agent 都不应写入源代码。

### 代码评审循环
每次任务执行后，`sdd-code-reviewer` 都会创建一个 `CR-XXXX.md`。被接受的发现项必须修复，Sprint 才能关闭。高影响发现项会升级为 `rule-candidates`，最终进入 `accepted-rules`。

### 用户确认点
阶段之间的推进必须由用户明确批准。Coordinator 不会越过关卡自主推进。

---

## 支持的平台

| 平台 | 配置目录 | 命令方式 | Agent 格式 |
|---|---|---|---|
| GitHub Copilot | `.github/` | Prompt 文件 | `.agent.md` |
| Claude Code | `.claude/` | Skill 文件 | `.md` |
| OpenAI Codex | `.codex/` | Skill 文件 | `.toml` |
| OpenCode | `.opencode/` | Command 文件 | `.md` |

---

## 许可证

MIT
