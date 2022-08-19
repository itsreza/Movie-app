#FROM node:12.16.3-slim
FROM node:16.15.1

MAINTAINER Reza "itsrezababakhani@gmail.com"

WORKDIR /app

COPY package*.json ./
RUN npm  cache clear --force
RUN npm install -g npm@8.9.0
RUN npm install
COPY . .
RUN npm run build


CMD ["npm", "run", "start"]
