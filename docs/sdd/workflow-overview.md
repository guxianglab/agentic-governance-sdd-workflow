# Agentic Governance SDD Workflow

## 完整循环

```text
输入需求 / 延续上下文
  -> /sdd-specify
  -> 需求用户评审
  -> /sdd-draft
  -> 草案用户评审
  -> /sdd-review
  -> 架构评审 + 安全评审
  -> /sdd-rfc
  -> RFC / PLAN / CURSOR / Sprint / TASKS / REVIEWS / TK
  -> Sprint 执行循环
  -> CR 评审循环
  -> 交付同步
  -> 关闭 sprint 或进入下一个 sprint
```

## 执行循环

1. Scheduler 读取 CURSOR 和 TASKS。
2. Scheduler 选择已就绪的叶子 TK。
3. Implementers 在写入范围内执行分配到的 TK。
4. 主 agent 运行预检查。
5. Code reviewer 创建 CR。
6. 修复被 accepted 的发现项。
7. 高影响发现项升级为 rule candidates。
8. Delivery agent 同步 TASKS / REVIEWS / CHECKLIST / CURSOR。
9. Coordinator 询问用户是继续还是关闭 sprint。
