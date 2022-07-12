FROM node:16
WORKDIR /home/node
COPY . .

RUN npm install --production
CMD [ "node", "index.js" ]