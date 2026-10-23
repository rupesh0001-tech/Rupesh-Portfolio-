# Portfolio monorepo (manual JSON CMS)

Turborepo with:

- `apps/web` — public portfolio
- `apps/admin` — content admin (port 3001)
- `packages/content` — Zod schemas + file repositories (no Prisma/DB)
- `storage/content/*.json` — editable content
- `storage/uploads/` — uploaded images

## Quick start

```bash
bun install
bun run content:seed   # writes storage/content/*.json from current portfolio data
bun run dev            # web :3000 + admin :3001
```

Or separately:

```bash
bun run dev:web
bun run dev:admin
```

Admin login password: `ADMIN_PASSWORD` in `.env` / `apps/admin/.env.local` (default `admin123`).

## What you can manage

| Admin section  | Edits                                    |
| -------------- | ---------------------------------------- |
| Projects       | name, desc, images, links, tech, publish |
| Skills         | tech-stack + about icons                 |
| Experience     | roles, companies, highlights             |
| Buttons / CTAs | Hire Me, Get in touch, any button href   |
| Social links   | X, LinkedIn, Instagram, GitHub           |
| Media          | upload images → `/uploads/...`           |
| Site text      | hero, about, footer, SEO copy            |

## Manual edit (no admin)

Open JSON files under `storage/content/` and save. Both apps read them on the next request.
