FROM node:4.2.4

WORKDIR /src
COPY . .

EXPOSE 1337

CMD ["node", "/src/app.js"]
