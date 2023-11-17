FROM node

WORKDIR /app

COPY . .

ENV PORT 4000

EXPOSE $PORT

RUN npm i

CMD [ "npm", "run", "dev" ]