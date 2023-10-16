# Use an official Golang runtime as a parent image
FROM node:lts-alpine3.18 AS builder

# Set the working directory to /app
ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY .env ./
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile
COPY . .
RUN yarn build

# Use an official Golang runtime as a parent image
FROM node:lts-alpine3.18 AS runner

# Set the working directory to /app
WORKDIR /app
COPY --from=builder /usr/src/app/.env .
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/yarn.lock .
COPY --from=builder /usr/src/app/next.config.js .
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
CMD [ "yarn", "start"]
EXPOSE 3000