# Webpack TypeScript Boilerplate

TypeScript Webpack 5 setup for small static frontend projects.

Use this template when you want TypeScript with `ts-loader` and no full application framework, but still need a complete frontend build with Sass, PostCSS, assets, linting, tests, and production output.

## Stack

- Webpack 5
- Webpack Dev Server
- TypeScript
- Sass
- PostCSS
- ESLint with TypeScript support
- Stylelint
- Jest

## Quick Start

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server. |
| `npm run dev:lint` | Start the dev server with lint plugins enabled. |
| `npm run watch` | Build in development watch mode. |
| `npm run watch:lint` | Build in watch mode with lint plugins enabled. |
| `npm run build` | Build production files to `dist`. |
| `npm run build:lint` | Build production files with lint plugins enabled. |
| `npm run eslint` | Run ESLint. |
| `npm run eslint:fix` | Run ESLint with automatic fixes. |
| `npm run stylelint` | Run Stylelint on `src`. |
| `npm run stylelint:fix` | Run Stylelint with automatic fixes. |
| `npm run lint` | Run ESLint and Stylelint. |
| `npm run lint:fix` | Fix ESLint and Stylelint issues. |
| `npm test` | Run Jest tests. |
| `npm run test:watch` | Run Jest in watch mode. |
| `npm run test:coverage` | Run Jest with coverage collection. |

## Source

- `src/views/index.html` - HTML template.
- `src/scripts/main.ts` - TypeScript entry.
- `src/styles/main.scss` - Sass entry.
- `src/images` - image assets.
- `src/fonts` - font assets.

The `@` alias points to `src`.
