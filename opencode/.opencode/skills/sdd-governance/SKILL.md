---
name: sdd-governance
description: Load the Agentic Governance SDD workflow rules, state files, task lifecycle, review loop, delivery sync, and sprint close process.
license: MIT
compatibility: opencode
metadata:
  version: "1.0.0"
---

# SDD Governance Skill

Use this skill when a request mentions SDD, requirement, draft, RFC, sprint, TK, CR, review loop, delivery sync, rule-candidate, or `.sdd/`.

## Required state files

Read these files before acting when they exist:

- `.sdd/CURSOR.md`
- `.sdd/REQUIREMENT.md`
- `.sdd/DRAFT.md`
- `.sdd/RFC.md`
- `.sdd/PLAN.md`
- `.sdd/TASKS.md`
- `.sdd/REVIEWS.md`
- `.sdd/CHECKLIST.md`

## Lifecycle

1. Specify: clarify requirement and update `.sdd/REQUIREMENT.md`.
2. Draft: create `.sdd/DRAFT.md` without implementation.
3. Review: run architecture/security review and update `.sdd/REVIEWS.md`.
4. RFC: create RFC, PLAN, TASKS, CHECKLIST, and CURSOR.
5. Sprint: schedule ready leaf TKs; implement only within declared write scopes.
6. Review loop: create one CR per leaf TK; classify findings; fix accepted findings; recheck.
7. Delivery sync: reconcile TASKS, REVIEWS, CHECKLIST, CURSOR.
8. Sprint close: retro, rule promotion, archive or next sprint.

## Non-negotiables

- Do not implement from vague requirements.
- Only leaf TKs are implementable.
- Every leaf TK needs a write scope.
- Every completed leaf TK needs a CR.
- Accepted findings must be fixed and rechecked.
- Stop and ask for human review after more than 5 review loops.
