# AGENTS.md

## Quick reference

- **Stack**: Vue 3 + Vite 4 + Less + Element Plus + vue-router 4
- **Package manager**: pnpm
- **No tests, lint, or typecheck** scripts exist. Run `pnpm run build` to verify changes.

## Commands

```bash
pnpm install          # install deps
pnpm run dev          # dev server on port 3000
pnpm run build        # production build
pnpm run preview      # preview production build
```

## Environment & API

- `VITE_API_BASE_URL` is loaded from `.env.development` (localhost:8898) / `.env.production` (remote server).
- Chat API (`/port` prefix) is proxied via Vite dev server to `http://127.0.0.1:8080` (see `vite.config.js:23`). The proxy rewrite strips `/port`.
- Two separate axios instances: `src/axios/myAxios.js` (blog API) and `src/axios/chatAxios.js` (chat API via `/port` proxy).

## Architecture

- **Entry**: `index.html` -> `src/main.js` -> `App.vue` (global nav + `<router-view>`)
- **Routes** (`src/router/index.js`): `/` Home, `/About`, `/Archive`, `/MarkdownPost` (post detail, takes `?id=`), `/chat`
- **Views pattern**: Each view dir (`src/views/*/`) has an `index.vue` (data/logic) and `template.tsx` (JSX rendering). Do not confuse the two.
- **Blog data**: Fetched from backend API via `src/api/catlog.js`, not from local markdown files. The `src/views/MarkdownPost/json.js` is sample/static content, not the live data source.
- **Mock**: `src/mock/mockAxios.js` uses `mockjs` — currently all mocks are commented out.

## Path aliases

`@` -> `src/` (configured in both `vite.config.js` and `jsconfig.json`). Use `@/...` for imports.

## Gotchas

- `vue` is aliased to `vue/dist/vue.esm-bundler.js` in vite.config.js to enable runtime template compilation (needed by `template.tsx` pattern). Do not remove this alias.
- `App.vue` uses `<keep-alive :include="['Home']">` — the Home component's `name: 'Home'` in the `<script>` block (not `<script setup>`) is required for keep-alive caching. If you add a new cached page, match the component name exactly.
- JSX is enabled via `@vitejs/plugin-vue-jsx`. Template files use `.tsx` extension with Vue's `defineComponent` + `setup()` returning a render function.
- `index.html` has inline script and body classes (`page-landing`, `no-touch`, etc.) that affect CSS. The `<body id="app">` is the Vue mount point, not `<div id="app">`.
- No TypeScript — `jsconfig.json` provides IDE support only. The `lang="ts"` in `src/views/Chat/index.vue` is an anomaly; most files are plain JS.
- No test framework, no linter, no formatter configured. The only verification is `pnpm run build`.
