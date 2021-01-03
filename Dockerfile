# multi-stage Dockerfile

# ---- base ----
FROM mhart/alpine-node:15.5 AS base
WORKDIR /base
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .

# ---- build ----
FROM base AS builder
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN yarn build
RUN yarn install --production

# ---- production ----
FROM mhart/alpine-node:15.5 AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/.next ./.next
COPY --from=builder /build/public ./public

CMD ["node_modules/.bin/next", "start", "-p", "5000"]
