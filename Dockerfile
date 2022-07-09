FROM node:16
WORKDIR /home/node
COPY . .

RUN npm install
CMD [ "node", "app.js" ]
ENTRYPOINT ["./wait-for-it.sh", "mysql-db:3306", "--", "npx sequelize-cli db:migrate"]
