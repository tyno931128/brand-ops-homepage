# Repository Conventions

이 문서는 공개 레포를 팀 단위로 운영할 때의 기본 규칙을 정의한다.

## Repository Model

- `main`은 항상 배포 가능한 상태로 유지한다.
- 모든 기능은 브랜치에서 작업한다.
- UI 변경은 스크린샷을 남긴다.
- PR 병합 전 `pnpm check`를 통과해야 한다.

## Branch Naming

```text
feature/<scope>
fix/<scope>
docs/<scope>
chore/<scope>
refactor/<scope>
test/<scope>
```

Examples:

```text
feature/ai-team-dashboard
feature/notion-research-library
fix/mobile-hero-layout
docs/vercel-deployment
chore/ci-setup
```

## Commit Convention

Use Conventional Commits.

```text
type(scope): summary
```

Examples:

```text
feat(hero): add threejs workflow scene
fix(hero): reduce mobile background intensity
docs(repo): add contribution guide
ci: add github actions verification
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

## Pull Request Rules

A good PR includes:

- Small scope
- Clear summary
- Screenshots for UI changes
- Verification commands
- Known risks

Avoid mixing unrelated work. For example, do not combine Notion API work,
homepage redesign, and deployment changes unless there is a direct dependency.

## Code Conventions

### TypeScript

- Keep `strict` mode on.
- Avoid `any`.
- Prefer explicit domain types when data crosses API boundaries.
- Keep external API response parsing isolated.

### React / Next.js

- Server Components by default.
- Client Components only for state, effects, browser APIs, or animation.
- Keep external SDK clients out of module scope when secrets/env vars are needed.
- Avoid large route files once sections become reusable.

### Styling

- Tailwind CSS is the default styling layer.
- Keep design tokens in `globals.css` or future theme files.
- Avoid one-off color sprawl.
- Check desktop and mobile screenshots for every visual change.

### Accessibility

- Use semantic HTML first.
- CTA labels must describe the action.
- Decorative 3D/canvas elements should be `aria-hidden`.
- Respect reduced motion preferences.

## Review Checklist

Before merging:

- [ ] Does the change match the business positioning?
- [ ] Does it preserve mobile readability?
- [ ] Does it avoid exaggerated AI or revenue claims?
- [ ] Are demo/sample audits clearly marked as samples?
- [ ] Does regulated-service copy avoid treatment, revenue, or result guarantees?
- [ ] Are placeholder contact details still acceptable for the target environment?
- [ ] Does it avoid committing secrets or customer data?
- [ ] Does `pnpm check` pass?

## Release Flow

1. Merge to `main`.
2. GitHub Actions runs CI.
3. Vercel deploys automatically from the Git provider.
4. Verify the production URL.
5. If a regression appears, revert the PR or redeploy the last good deployment.
