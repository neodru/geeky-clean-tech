## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

- ## Autonomous Code Review & Quality Guidelines

### 1. Autonomous Verification Loop
Before marking any task as complete, submitting a PR, or requesting human review, you MUST execute the complete verification pipeline in sequence:
1. **Linting & Formatting**: Run `<insert_lint_cmd>` (e.g., `npm run lint` or `uv run ruff check .`). Fix all warnings and errors.
2. **Type Checking**: Run `<insert_typecheck_cmd>` (e.g., `npx tsc --noEmit` or `uv run mypy .`).
3. **Automated Tests**: Run `<insert_test_cmd>` (e.g., `npm test` or `uv run pytest`). 
4. **Self-Correction**: If any step fails, analyze the output, resolve the root cause, and re-run all checks. Do not suppress lint rules or bypass failing tests.

### 2. Diff Hygiene & Self-Review
Inspect your full change set (`git diff`) prior to completion to verify:
- **Scope Discipline**: Changes are strictly limited to the specified task. Revert any accidental modifications to unrelated files or legacy modules.
- **Artifact Cleanup**: Ensure no temporary debug code (`console.log`, `print`, `debugger`), orphaned imports, or commented-out code blocks remain.
- **Security Check**: Confirm no credentials, private tokens, API keys, or `.env` entries are exposed in code or commits.
- **Documentation**: Update inline documentation, README, or schema definitions if public interfaces or configurations changed.

### 3. Testing Standards
- **Coverage**: Every bug fix must include a regression test. Every new feature must include unit or integration tests covering both happy path and edge cases.
- **Determinism**: Tests must be isolated and reproducible without relying on hardcoded external network state.

### 4. Human Escalation Triggers ("Escape Hatches")
Pause autonomous work and request human feedback immediately if:
- **Failure Loop Limit**: You hit 3 consecutive failed attempts at resolving a build or test error.
- **Destructive Operations**: The task requires destructive database migrations, force pushes, or changes to production infrastructure definitions.
- **Architectural Ambiguity**: Requirements conflict with existing repository patterns or require breaking changes to public APIs.
