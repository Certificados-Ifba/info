FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock  ./

RUN yarn && yarn cache clean

COPY ./ ./
