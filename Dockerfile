# multi-stage Dockerfile

# ---- base ----
FROM node:current-alpine AS base
WORKDIR /app
COPY ./app/package.json .

# ---- dependencies ----
FROM base AS dependencies
# install only production
RUN yarn --production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules

# ---- development ----
FROM dependencies AS dev
ENV NODE_ENV=development
# install all node_modules, including 'devDependencies'
RUN yarn --development

# ---- release ----
FROM dependencies AS release
ENV NODE_ENV=production
# copy production node_modules
COPY --from=dependencies /app/prod_node_modules ./node_modules
# copy app sources
COPY ./app .

# build
RUN yarn build

# expose port and define CMD
EXPOSE 5000
CMD yarn start
