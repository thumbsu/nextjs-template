# nextjs-template

Dockerising a Next.js project and Development environment settings

## Development

Install devDependencies for convenient development using extensions supported by the editor.

```bash
$ yarn --development
```

[docker](https://docs.docker.com/engine/install/), [docker-compose](https://docs.docker.com/compose/install/) must be installed.

You can access port 5001.

```bash
$ docker-compose up -d dev
```

`yarn` command it's entry point. You can use it like this:

```bash
$ docker-compose run yarn add --dev typescript
```

If you added 'dev' package, run it again:

```bash
$ yarn --development
```

Use husky to check lint and formatting before committing, and check the convention of the commit message.

### storybook

You can access port 5001.

```bash
$ docker-compose up -d sb
```

### Commit Message Convention

If eslint cannot automatically fix it, or if the commit message is not written according to the convention, the commit will not work.

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The version and changelog can be automatically generated by using [standard-version](https://github.com/conventional-changelog/standard-version#readme) package.

```bash
$ yarn release --first-commit
# To generate changelog for first release
$ yarn release -- --prerelease
# 1.0.0 -> 1.0.1-0.
$ yarn release -- --prerelease alpha
# This will tag the version as: 1.0.1-alpha.0


# To forgo the automated version bump use --release-as with the argument major, minor or patch
$ yarn release -- --release-as major
$ yarn release -- --release-as minor
$ yarn release -- --release-as patch
```

### storybook

Build a docker image for production:

```bash
$ docker build --target nginx -f contrib/docker/Dockerfile-sb -t <image-name> .
```

Try running the built image:

```bash
$ docker run -it --rm -p 8080:80 --name web sb
```

You can access port 8080.

**NOTE**: https://tailwindcss.com/docs/installation#post-css-7-compatibility-build

### CSS preprocessor

you don't need to use a preprocessor with Tailwind.

> **No quirks or workarounds.** Because Tailwind adds some new non-standard keywords to CSS (like `@tailwind`, `@apply`, `theme()`, etc.), you often have to write your CSS in annoying, unintuitive ways to get a preprocessor to give you the expected output. Working exclusively with PostCSS avoids this.

## Production

Build a docker image for production:

```bash
$ docker build --target runner -f contrib/docker/Dockerfile -t <image-name> .
```

Try running the built image:

```bash
$ docker run -it --rm -p 5000:5000 <image-name>
```

You can access port 5000.

## Features

- Typescript
- Next.js v10.0.4
- Redux Store (next-redux-wrapper, redux-thunk, redux-persist, redux-logger, redux-devtools-extension)
- Docker build
- Storybook
- Eslint
- Prettier
- Husky + lint-staged
- Commit Lint
- Standard Version
