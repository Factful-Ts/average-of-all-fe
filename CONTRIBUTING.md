## Contribution Guidelines

This document describes the preparation and work processes required for project contributors to work.

## Preparations

- Node.js LTS
- pnpm

## Install

Clone the project:

```shell
git clone https://github.com/Factful-Ts/factful-ts-fe.git && cd factful-ts-fe
```

Install the dependencies:

```shell
pnpm install
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `storybook`: preview common components and example
- `averageService`: average of all service's [Next.js](https://nextjs.org/) app
- `@factful/factful-design-system`: our common design system using in `/apps`
- `@factful/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@factful/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Build

To build all apps and packages, run the following command:

```shell
pnpm build
```

## Develop

To develop all apps and packages, run the following command:

```shell
pnpm dev
```

## Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```shell
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```shell
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
