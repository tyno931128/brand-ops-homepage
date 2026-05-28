# Vercel Deployment

이 프로젝트는 Vercel 배포를 기준으로 구성한다.

공식 Vercel 문서 기준으로 Next.js는 Vercel에서 자동 감지되며, `pnpm-lock.yaml`이 있으면 pnpm 기반 설치가 적용된다. Vercel의 현재 Node.js 지원 버전은 `24.x`, `22.x`, `20.x`이고 새 프로젝트 기본값은 최신 LTS 계열이다.

References:

- [Next.js on Vercel](https://vercel.com/docs/concepts/next.js/overview)
- [Vercel Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)

## Project Settings

Recommended settings:

| Setting          | Value                            |
| ---------------- | -------------------------------- |
| Framework Preset | Next.js                          |
| Install Command  | `pnpm install --frozen-lockfile` |
| Build Command    | `pnpm build`                     |
| Output Directory | Vercel default                   |
| Node.js Version  | `24.x`                           |

The same values are also captured in `vercel.json` and `package.json`.

## Environment Variables

Current homepage does not require secrets.

Future Notion and AI integrations should use environment variables such as:

```text
NOTION_TOKEN=
NOTION_PROFILE_DATA_SOURCE_ID=
NOTION_RESEARCH_LIBRARY_DATA_SOURCE_ID=
NOTION_KNOWLEDGE_NOTES_DATA_SOURCE_ID=
OPENAI_API_KEY=
```

Rules:

- Use Vercel Project Settings for production secrets.
- Use `.env.local` locally.
- Never commit `.env*` files.
- Keep public client variables prefixed with `NEXT_PUBLIC_` only when they are
  intentionally safe to expose.

## Deploy From GitHub

1. Create a public GitHub repository.
2. Push this project to `main`.
3. Import the repository in Vercel.
4. Confirm the detected framework is Next.js.
5. Confirm Node.js `24.x`.
6. Deploy.
7. Add the production URL to the GitHub repository About section.

## Current Local Status

As of 2026-05-28:

- The project is a local Git repository.
- No GitHub remote is connected yet.
- `.vercel/project.json` is not present, so this workspace is not linked to a Vercel project yet.
- The current contact CTA still uses the placeholder email `hello@example.com`.
- Production metadata does not yet include a canonical production URL or OG image URL.

Do not deploy publicly until the placeholder contact details and production URL
are confirmed.

## Public Template Use

If this becomes a public starter/template:

- Keep placeholder contact information obvious.
- Do not ship private Notion database IDs.
- Keep example content clearly marked as demo content.
- Add setup instructions for users who want to connect their own Notion workspace.

## Pre-Deploy Verification

Run:

```bash
pnpm check
```

For UI changes, also verify:

- Desktop screenshot
- Mobile screenshot
- No horizontal overflow
- No browser console errors
- 3D scene is nonblank
