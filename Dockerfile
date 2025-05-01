FROM oven/bun:alpine AS build

WORKDIR /app

ENV NODE_ENV=production

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY src src

RUN bun run build && bun run build:tw

FROM alpine

RUN apk add libstdc++
RUN adduser -D bun
WORKDIR /app

COPY public public

COPY --from=build /app/build/app.bun app.bun
COPY --from=build /app/public public

USER bun
EXPOSE 3000

CMD ["./app.bun"]
