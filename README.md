# playground

## Description

A base TypeScript Node project meant for problem exploration, interviewing, and general noodling

## Main Libraries

- Language
  - [TypeScript](https://www.typescriptlang.org/)
- Testing
  - [Vitest](https://vitest.dev/)
- Code Linting + Formatting
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [CSpell](https://cspell.org/)
- Versioning
  - [Husky](https://typicode.github.io/husky/)
  - [commitlint](https://commitlint.js.org/)
  - [standard-changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/standard-changelog)

## Installing

### Prerequisites

- macOS 14 (or later) / recent Linux distribution (e.g. Ubuntu 22 or later)
- [Node 22](https://nodejs.org/en/download)

### Command

```bash
$ npm i
```

## Setting Up an IDE (Visual Studio Code)

### Recommended Extensions

- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
- [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

## Building

### Command

```bash
$ npm run build
```

## Running

(Build command must be run before running)

### Command

```bash
$ npm run start
```

## Testing

### Commands

For individual test runs:

```bash
$ npm run test
```

For watching changes:

```bash
$ npm run test:watch
```

## Committing

Codebase commits use [Conventional Commits](https://www.conventionalcommits.org/) (a.k.a. the "Angular commit syntax")

## Releasing

### Process

1. Increment the `package.json` and `package-lock.json` version

2. Run:

```bash
$ npm run changelog
```

3. Review additions to `CHANGELOG.md` and edit as needed

4. Commit changes with `feat` prefix

## Prior Art

Inspired by the [TypeScript Starter](https://github.com/bitjson/typescript-starter) project
