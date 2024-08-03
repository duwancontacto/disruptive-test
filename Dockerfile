
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g next

RUN npm run build

EXPOSE 443

CMD ["npm", "run", "start"]
