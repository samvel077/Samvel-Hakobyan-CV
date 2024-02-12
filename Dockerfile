FROM node:18-alpine AS base

WORKDIR usr/src/app

COPY package*.json .

RUN npm install -g @angular/cli

COPY . .

FROM base AS builder

#WORKDIR usr/src/app

RUN npm run build:prod

FROM base AS develop

#WORKDIR usr/src/app

RUN npm install

#COPY package*.json .
#
#RUN npm install -g @angular/cli
#
#RUN npm install
#
#COPY . .
#
VOLUME /usr/src/app/node_modules

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "500"]

#FROM nginx:latest as prod
#
#WORKDIR usr/src/app
#
#COPY --from=build /usr/src/app/docs/Samvel-Hakobyan-CV /usr/share/nginx/html
#
#COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
#
#EXPOSE 80
#
#CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
