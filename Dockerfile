# Step 1: Build
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

# Step 2: Run
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]