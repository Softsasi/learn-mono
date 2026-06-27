# My App Monorepo

A pnpm monorepo with Express backend and React frontend.

## Structure

```
my-app/
├── apps/
│   ├── backend/     # Express 5 + TypeScript API
│   └── frontend/    # React 19 + Vite + React Compiler
└── packages/
    └── shared/      # Shared types/utils (empty)
```

## Quick Start

```bash
# Install dependencies
pnpm install

# Run both dev servers
pnpm dev

# Build all packages
pnpm build
```

## Backend (apps/backend)

- **Stack**: Express 5, TypeScript, tsx (dev), tsx watch mode
- **Port**: 8080
- **Endpoints**:
  - `GET /` — "Hello World!"
  - `GET /todos` — Returns 3 sample todos

```bash
cd apps/backend
pnpm dev   # tsx watch src/index.ts
pnpm build # tsc
pnpm start # node dist/index.js
```

## Frontend (apps/frontend)

- **Stack**: React 19, TypeScript, Vite, React Compiler, Oxlint
- **Dev server**: `pnpm dev` (Vite)
- **Build**: `pnpm build` (tsc + vite build)
- **Lint**: `pnpm lint` (oxlint)

## Shared Package (packages/shared)

Currently empty — add shared TypeScript types, utilities, or constants here.

```bash
cd packages/shared
# Add package.json exports, then import via @my-app/shared
```

## Scripts (root)

| Command | Description |
|---------|-------------|
| `pnpm dev` | Run all workspaces in dev mode |
| `pnpm build` | Build all workspaces |
| `pnpm -r <script>` | Run script in all workspaces |

## Requirements

- Node.js 20+
- pnpm 10+