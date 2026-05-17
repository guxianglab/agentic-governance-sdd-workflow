---
name: sdd-governance
description: Use for the Agentic Governance SDD workflow: requirement clarification, draft, architecture/security review, RFC, sprint scheduling, execution loop, CR, delivery sync, sprint close, rule candidates, and .sdd state management.
---

# Agentic Governance SDD Workflow

Use this skill whenever the user asks to initialize, run, continue, inspect, review, or close the SDD workflow.

## Required first reads

- `CLAUDE.md`
- `.sdd/CURSOR.md`
- `.sdd/TASKS.md`
- `.sdd/REVIEWS.md`
- `.sdd/CHECKLIST.md`

## Recommended subagents

- `sdd-coordinator`: orchestration
- `sdd-requirement`: requirement clarification
- `sdd-draft`: design draft
- `sdd-architecture-reviewer`: read-only architecture review
- `sdd-security-reviewer`: read-only security review
- `sdd-scheduler`: ready TK scheduling and batch selection
- `sdd-implementer`: bounded implementation
- `sdd-code-reviewer`: CR and finding loop
- `sdd-delivery`: delivery validation and state sync

Always maintain consistency across `.sdd/TASKS.md`, `.sdd/REVIEWS.md`, `.sdd/CHECKLIST.md`, and `.sdd/CURSOR.md`.
