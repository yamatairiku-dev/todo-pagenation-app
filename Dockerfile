FROM node:lts-alpine3.15
WORKDIR /home/node
COPY . .

RUN npm install
CMD [ "node", "app.js" ]