---
name: backend
description: Describe what this skill does and when to use it. Include keywords that help agents identify relevant tasks.
---


# Backend Engineering Rules

## Objective

Build scalable, maintainable, secure, and production-ready backend systems.

Backend architecture must prioritize:

* security
* scalability
* maintainability
* reliability
* performance
* clean architecture
* developer experience

Avoid quick hacks and tightly coupled systems.

---

# 1. Backend Philosophy

Backend systems should be:

* modular
* predictable
* testable
* secure
* scalable
* observable
* easy to maintain

Prefer:

* simplicity
* separation of concerns
* explicit logic
* reusable services

Avoid:

* business logic inside controllers
* duplicated logic
* massive route files
* hidden side effects
* tightly coupled systems

---

# 2. Architecture Rules

Use clear layered architecture.

Preferred structure:

src/
modules/
routes/
controllers/
services/
repositories/
middlewares/
validators/
utils/
config/
types/

Each layer has responsibility:

## Controllers

* receive requests
* validate inputs
* call services
* return responses

Do not place business logic here.

---

## Services

* business logic
* orchestration
* transactions
* workflows

Services should remain reusable and isolated.

---

## Repositories / Data Layer

* database interaction only
* queries
* persistence logic

Avoid database logic inside controllers.

---

# 3. API Design Rules

APIs must be:

* predictable
* consistent
* RESTful when appropriate
* versionable

Use:

* proper HTTP methods
* meaningful route naming
* standardized response structures

Example:

GET /products
POST /products
PATCH /products/:id
DELETE /products/:id

Avoid:

* inconsistent naming
* action-heavy routes
* unclear endpoints

---

# 4. Validation Rules

Never trust client input.

Always validate:

* request body
* query params
* route params
* uploaded files

Validation must occur before business logic.

Return clear validation errors.

Avoid exposing internal system details.

---

# 5. Authentication & Authorization Rules

Authentication and authorization are separate concerns.

## Authentication

Verify identity.

## Authorization

Verify permissions.

Always:

* hash passwords securely
* use secure tokens
* validate sessions
* protect sensitive routes

Never:

* trust frontend role checks
* expose sensitive data
* store plaintext secrets

---

# 6. Security Rules

Security is mandatory.

Always:

* sanitize input
* validate uploads
* use HTTPS
* protect against injection attacks
* implement rate limiting
* secure environment variables

Avoid:

* exposing stack traces
* leaking database errors
* storing secrets in code
* insecure file uploads

Never assume client-side validation is enough.

---

# 7. Database Design Rules

Design schemas carefully.

Prioritize:

* normalization where appropriate
* indexing
* query efficiency
* scalability
* consistency

Always consider:

* future relationships
* filtering
* pagination
* aggregation cost

Avoid:

* deeply nested structures
* duplicated data without purpose
* unindexed expensive queries

---

# 8. Query Performance Rules

Optimize database access.

Avoid:

* N+1 queries
* overfetching
* unbounded queries
* loading unnecessary fields

Use:

* pagination
* projections/selects
* indexes
* caching when appropriate

Always think about scale.

---

# 9. Error Handling Rules

Every backend operation must handle:

* validation errors
* authentication errors
* authorization errors
* database failures
* external service failures
* unexpected exceptions

Use centralized error handling.

Return:

* consistent responses
* meaningful messages
* safe error output

Never expose internal implementation details.

---

# 10. Logging & Observability Rules

Backend systems must be observable.

Log:

* critical operations
* failures
* authentication events
* external service errors

Avoid:

* noisy logs
* sensitive information in logs

Logs should help debugging production systems.

---

# 11. File Upload Rules

Validate:

* file type
* size
* content safety

Use cloud storage when appropriate.

Never trust uploaded filenames.

Avoid storing large files directly on application servers.

---

# 12. Caching Rules

Use caching strategically.

Cache:

* expensive queries
* repeated computations
* external API responses

Avoid:

* stale critical data
* unnecessary caching complexity

Always define cache invalidation strategy.

---

# 13. Pagination Rules

Large datasets must use pagination.

Avoid returning huge arrays.

Support:

* limit
* cursor or page pagination
* sorting
* filtering

Always optimize list endpoints.

---

# 14. Background Job Rules

Heavy tasks should run asynchronously.

Examples:

* emails
* image processing
* report generation
* notifications

Avoid blocking request-response cycles.

---

# 15. Environment Configuration Rules

Use environment variables for:

* secrets
* API keys
* database URLs
* external services

Never hardcode secrets.

Separate:

* development
* staging
* production

---

# 16. External Service Rules

External services can fail.

Always:

* handle timeouts
* retry safely
* validate responses
* log failures

Never assume third-party services are stable.

---

# 17. API Response Rules

Responses should be consistent.

Example:

{
success: true,
data: {},
message: ""
}

Errors:

{
success: false,
error: {
code: "",
message: ""
}
}

Avoid inconsistent response formats.

---

# 18. Transaction Rules

Critical multi-step operations should use transactions.

Examples:

* payments
* order creation
* inventory updates

Prevent partial system corruption.

---

# 19. Scalability Rules

Design systems that can grow.

Think about:

* horizontal scaling
* stateless services
* database bottlenecks
* caching
* queue systems

Avoid assumptions that only work for small traffic.

---

# 20. Maintainability Rules

Code should be:

* readable
* modular
* documented
* testable

Prefer:

* explicit naming
* isolated modules
* reusable services
* small focused functions

Avoid:

* giant service files
* hidden coupling
* unclear abstractions

---

# 21. Testing Rules

Critical backend logic should be testable.

Test:

* business logic
* validation
* authentication
* permissions
* critical workflows

Avoid tightly coupled code that cannot be tested.

---

# 22. Backend Performance Rules

Optimize:

* database queries
* response size
* memory usage
* CPU-heavy operations

Avoid:

* blocking operations
* excessive serialization
* unnecessary processing

Measure before optimizing aggressively.

---

# 23. AI Backend Implementation Rules

When generating backend code:

Always:

* separate concerns
* validate all input
* implement secure patterns
* use scalable architecture
* optimize database access
* implement proper error handling
* maintain consistent response structures

Before implementation:

1. define data flow
2. define validation requirements
3. define security requirements
4. define database interactions
5. define edge cases
6. define scalability concerns

Then implement.

---

# 24. Final Backend Standard

Backend systems should feel:

* stable
* secure
* scalable
* predictable
* maintainable
* production-ready

Good backend engineering is not only making APIs work.

It is building systems that remain reliable as complexity and traffic grow.
