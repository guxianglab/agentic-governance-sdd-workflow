---
name: sdd-governance
description: Use for the Agentic Governance SDD workflow: requirements, draft, architecture/security review, RFC, sprint task scheduling, execution loop, code review, delivery sync, sprint close, rule candidates, and .sdd state management.
---

# Agentic Governance SDD Workflow Skill

Use this skill whenever the user asks to run, initialize, continue, review, or close the SDD workflow.

## Files to read first

- `AGENTS.md`
- `.sdd/CURSOR.md`
- `.sdd/TASKS.md`
- `.sdd/REVIEWS.md`
- `.sdd/CHECKLIST.md`

## Available Codex custom agents

- `sdd_coordinator`: overall orchestration
- `sdd_requirement`: requirement clarification
- `sdd_draft`: design draft creation
- `sdd_architecture_reviewer`: read-only architecture review
- `sdd_security_reviewer`: read-only security review
- `sdd_scheduler`: ready TK scheduling and batch selection
- `sdd_implementer`: bounded implementation within assigned write scope
- `sdd_code_reviewer`: CR creation, finding classification, recheck loop
- `sdd_delivery`: delivery validation and state sync

## Required loop

Requirement → Draft → Architecture/Security Review → RFC/PLAN/TASKS/CURSOR → Scheduler → Execution → CR Review Loop → Delivery Sync → Sprint Exit Check.

Never close work without updating `.sdd/` state files.
