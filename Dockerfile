FROM node:20-alpine3.18 AS base

WORKDIR usr/src/app

COPY package*.json .

RUN npm install -g @angular/cli

RUN npm install

COPY . .

FROM base AS develop

VOLUME /usr/src/app/node_modules

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "500"]
