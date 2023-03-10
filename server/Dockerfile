FROM node:lts-alpine3.17

WORKDIR /app

COPY package.json package.json
RUN npm install

COPY index.js index.js

CMD ["node", "index.js"]
