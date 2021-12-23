FROM node:16-alpine as builder

RUN mkdir -p /usr/src/app/node_modules
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.* ./
RUN yarn global add typescript
RUN yarn install
COPY . .
RUN yarn build

FROM node:16-alpine as runner
RUN mkdir -p /usr/src/app/node_modules
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.* ./
RUN yarn install --production
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.js ./
COPY --from=builder /usr/src/app/build/standalone ./
COPY --from=builder /usr/src/app/build/static ./build/static
COPY .env* .

EXPOSE 3000
ENV PORT=3000
# CMD [ "yarn", "start" ]
CMD [ "node", "server.js" ]
