# Nutricia

A minimal, production-ready starter. Includes:

- Vite + React + TypeScript
- TailwindCSS 3 (dark mode via `.dark` class)
- TanStack Router v1
- shadcn/ui (manual setup + example Button)
- ESLint (flat config) + Prettier
- Husky + lint-staged

## Project Setup

This project uses the following main tools and libraries:

**Dependencies:**

- react, react-dom
- @tanstack/react-router
- @radix-ui/react-slot
- lucide-react
- tailwindcss-animate
- class-variance-authority, clsx
- tailwind-merge

**DevDependencies:**

- typescript
- vite
- @vitejs/plugin-react
- tailwindcss, autoprefixer, postcss
- eslint, @typescript-eslint/\*, eslint-plugin-react-hooks, eslint-plugin-react-refresh
- prettier, prettier-plugin-tailwindcss
- husky, lint-staged

### Common Commands

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint
- `npm run format` — Format code with Prettier

## Add more shadcn components

Configure the CLI per `shadcn.json` and add components to `src/components/ui`.
