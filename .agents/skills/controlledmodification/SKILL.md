---
name: controlledmodification
description: Describe what this skill does and when to use it. Include keywords that help agents identify relevant tasks.
---

<!-- Tip: Use /create-skill in chat to generate content with agent assistance -->

# Safe Code Generation & Refactoring Rules

## Objective

Generate and update code safely without breaking existing systems, architecture, services, or application flows.

Before modifying any code:

* understand the existing architecture
* analyze dependencies
* identify affected systems
* preserve consistency
* avoid unintended side effects

The goal is safe, scalable, maintainable implementation.

---

# 1. Read Project Context First

Before generating or updating code:

Always read:

* project-planning-system-flow.md
* frontend rules
* backend rules
* architecture documentation
* relevant feature files

Never generate code blindly.

Always understand:

* application structure
* feature boundaries
* data flow
* service relationships
* existing patterns

---

# 2. Analyze Existing Code Before Editing

Before modifying a file:

Understand:

* file responsibility
* connected services
* imported dependencies
* shared utilities
* state flow
* API contracts

Never rewrite code without understanding its purpose.

---

# 3. Preserve Existing Architecture

New code must follow:

* existing folder structure
* naming conventions
* state management patterns
* validation patterns
* API patterns
* UI patterns

Avoid introducing inconsistent architecture.

---

# 4. Avoid Breaking Existing Features

Before implementing changes:

Analyze:

* what depends on this code
* what may break
* what services consume this data
* what frontend/backend contracts exist

Never make isolated changes without considering system impact.

---

# 5. Prefer Minimal Safe Changes

Prefer:

* focused updates
* incremental refactors
* isolated improvements

Avoid:

* unnecessary rewrites
* large uncontrolled refactors
* changing unrelated logic

Do not modify working systems without clear reason.

---

# 6. Maintain Backward Compatibility

When updating APIs, schemas, or shared utilities:

Avoid:

* breaking response formats
* changing shared contracts unexpectedly
* removing required fields abruptly

Preserve compatibility whenever possible.

---

# 7. Understand Dependencies First

Before editing:

Identify:

* shared components
* shared hooks
* shared services
* middleware dependencies
* database relationships
* API consumers

Never assume a file is isolated.

---

# 8. Avoid Duplicate Logic

Before creating new functionality:

Search for:

* existing utilities
* reusable hooks
* shared services
* helper functions
* existing patterns

Prefer extending existing systems over duplicating logic.

---

# 9. Refactoring Rules

When refactoring:

Preserve:

* behavior
* functionality
* API contracts
* UX consistency

Refactoring should improve:

* readability
* maintainability
* scalability
* performance

Without changing expected behavior.

---

# 10. Update Related Systems Carefully

If modifying:

* schemas
* APIs
* authentication
* validation
* shared state
* reusable components

Also verify:

* frontend compatibility
* backend compatibility
* database compatibility
* service integrations

Never partially update interconnected systems.

---

# 11. Verify State Consistency

Before modifying state logic:

Understand:

* source of truth
* optimistic updates
* cache behavior
* synchronization flow
* persistence logic

Avoid inconsistent state updates.

---

# 12. Preserve UX Consistency

When updating frontend systems:

Maintain:

* existing design system
* spacing
* animations
* accessibility
* responsive behavior
* loading states

Avoid inconsistent user experiences.

---

# 13. Avoid Hidden Side Effects

Every change should be predictable.

Avoid:

* modifying unrelated logic
* mutating shared state unexpectedly
* introducing implicit behavior
* creating tight coupling

Prefer explicit predictable code.

---

# 14. Error Prevention Rules

Before implementation:

* identify possible failure points
* identify edge cases
* identify race conditions
* identify async issues
* identify null/undefined risks

Never assume perfect input or timing.

---

# 15. Safe Database Update Rules

When modifying schemas or database logic:

Always consider:

* migrations
* existing data
* indexes
* relationships
* query performance

Avoid destructive schema updates without compatibility planning.

---

# 16. API Safety Rules

When updating endpoints:

Preserve:

* response shape consistency
* error structure consistency
* authentication requirements
* validation behavior

Never silently change API behavior.

---

# 17. Large Feature Update Rules

For large changes:

1. analyze existing system
2. define affected services
3. define update plan
4. implement incrementally
5. verify compatibility
6. review for regressions

Avoid massive uncontrolled edits.

---

# 18. AI Code Generation Rules

Before generating code:

* understand the project
* understand existing architecture
* understand dependencies
* understand feature flow

Always:

* generate production-ready code
* maintain consistency
* avoid overengineering
* avoid duplicated logic
* preserve maintainability

Never:

* invent architecture randomly
* rewrite unrelated files unnecessarily
* ignore existing patterns
* break established contracts

---

# 19. Change Verification Rules

After implementation verify:

* no unrelated systems broke
* imports remain valid
* types remain consistent
* API contracts remain valid
* state remains synchronized
* UI remains responsive
* accessibility remains intact

---

# 20. Final Engineering Standard

Every code update should feel:

* safe
* intentional
* maintainable
* predictable
* scalable

Good engineering is not only generating code.

It is safely evolving complex systems without introducing instability.
