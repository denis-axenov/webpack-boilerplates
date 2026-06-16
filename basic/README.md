# Webpack Basic Boilerplate

Vanilla JavaScript Webpack 5 setup for small static pages, prototypes, and landing pages.

Use this template when you need a clean vanilla JavaScript build without a framework, but still want Sass, PostCSS, asset handling, linting, tests, and production output ready from the start.

## Stack

- Webpack 5
- Webpack Dev Server
- JavaScript via SWC
- Sass
- PostCSS
- ESLint
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
| `npm run watch` | Build in development mode and watch files. |
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
- `src/scripts/main.js` - JavaScript entry.
- `src/styles/main.scss` - Sass entry.
- `src/images` - image assets.
- `src/fonts` - font assets.

The `@` alias points to `src`.
