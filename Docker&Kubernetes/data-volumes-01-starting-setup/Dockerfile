FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

# VOLUME ["/app/temp"]

CMD ["npm", "start"]
