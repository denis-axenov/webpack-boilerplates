# Webpack Boilerplates

Ready-to-use Webpack 5 templates for small static frontend projects.

Starting a small frontend project with Webpack often means repeating the same setup: Sass, PostCSS, assets, fonts, linting, tests, aliases, and a production build. This repository keeps that setup prepared in several variants, so you can copy the closest template and start from working defaults.

## Templates

| Template | Use For |
| --- | --- |
| [`basic`](./basic/README.md) | Vanilla JavaScript pages without a framework. |
| [`jquery`](./jquery/README.md) | jQuery projects or legacy code that needs a modern build pipeline. |
| [`typescript`](./typescript/README.md) | Static frontend projects written in TypeScript. |

## Structure

Each template is a standalone project with its own `package.json`, lockfile, configs, tests, and source files.

## Scope

Templates are independent and are meant to be copied or used separately.

## Common Stack

- Webpack 5
- Webpack Dev Server
- SWC in JavaScript templates
- Sass and PostCSS
- ESLint and Stylelint
- Jest
- Asset and font handling

## Requirements

- Node.js `>=24.16.0`

Each template has its own README with setup details, quick start commands, and available scripts.

## License

MIT
