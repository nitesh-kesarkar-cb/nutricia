# React + Vite + TypeScript + Tailwind + TanStack Router + shadcn/ui

A minimal, production-ready starter. Includes:

- Vite + React + TypeScript
- TailwindCSS 3 (dark mode via `.dark` class)
- TanStack Router v1
- shadcn/ui (manual setup + example Button)
- ESLint (flat config) + Prettier
- Husky + lint-staged
- Legacy static page embedded at `/legacy`

## Getting Started

```bash
pnpm i # or npm i / yarn
pnpm dlx husky init
pnpm dev
```

## Add more shadcn components

Configure the CLI per `shadcn.json` and add components to `src/components/ui`.
