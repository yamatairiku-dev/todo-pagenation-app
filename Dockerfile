FROM node:16
WORKDIR /home/node
COPY . .

RUN npm install
CMD [ "node", "app.js" ]