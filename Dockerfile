FROM node:latest

RUN mkdir app
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
ENV PORT=3000

CMD [ "npm","run","start" ]