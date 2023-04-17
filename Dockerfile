FROM node:14.19.0

ENV APP_PORT=3010

ADD . /app
WORKDIR /app

RUN npm install -g npm
RUN npm install 

HEALTHCHECK --interval=5m --start-period=5s CMD curl -f localhost:${APP_PORT}/health
CMD ["npm", "run", "serve"]