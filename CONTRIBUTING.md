# Contributing

Thanks for helping improve this project. The goal is to keep the codebase useful
for a real service while still being readable for people learning from it.

## Development Setup

Requirements:

- Node.js `24.x`
- pnpm `10.x`

Install and run:

```bash
pnpm install
pnpm dev
```

Before opening a pull request:

```bash
pnpm check
```

## Branch Convention

Use short, scoped branch names.

```text
feature/notion-research-library
feature/ai-team-dashboard
fix/mobile-hero-overlap
docs/vercel-deployment
chore/repo-conventions
```

Recommended prefixes:

- `feature/` for product changes
- `fix/` for bug fixes
- `docs/` for documentation
- `chore/` for maintenance
- `refactor/` for behavior-preserving code changes
- `test/` for test-only work

## Commit Convention

Use Conventional Commits.

```text
feat: add 3d hero workflow scene
fix: prevent mobile hero text overlap
docs: document vercel deployment flow
chore: add repository conventions
refactor: extract hero scene component
```

Allowed types:

- `feat`
- `fix`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`
- `build`
- `ci`
- `chore`

## Pull Request Standard

Each pull request should include:

- What changed
- Why it changed
- Screenshots for UI changes
- Verification commands
- Known risks or follow-up work

Keep pull requests focused. A UI redesign, Notion integration, and deployment
change should usually be separate PRs unless they must ship together.

## Code Style

- Prefer Server Components by default.
- Use Client Components only when browser APIs, state, effects, or animation are
  required.
- Keep components small and named exports preferred for shared components.
- Put feature-specific UI in `src/components` until a larger feature structure is
  needed.
- Keep secrets behind environment variables and initialize external clients
  lazily.
- Use accessible HTML and keep CTA text clear.
- Do not use guaranteed revenue claims, fake case studies, or unclear AI
  automation promises.
