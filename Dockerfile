FROM node:lts-alpine3.15
WORKDIR /home/node
COPY . .

RUN npm install
RUN npx sequelize-cli db:migrate
CMD [ "node", "app.js" ]