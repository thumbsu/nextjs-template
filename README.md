# nextjs-template

Dockerising a Next.js project and Development environment settings

## Development

[docker](https://docs.docker.com/engine/install/), [docker-compose](https://docs.docker.com/compose/install/) must be installed

```bash
$ docker-compose up -d dev
```

`yarn` command it's entry point. You can use it like this:

```bash
$ docker-compose run yarn add --dev typescript
```

## Production

Build a docker image for production

```bash
$ docker build --target runner -t <image-name> .
```

Try running the built image

```bash
$ docker run -p 5000:5000 <image-name>
```
