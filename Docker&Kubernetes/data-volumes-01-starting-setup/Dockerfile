FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV PORT 80

EXPOSE $PORT

# VOLUME ["/app/temp"]

CMD ["npm", "start"]
