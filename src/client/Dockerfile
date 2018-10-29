FROM node:latest
RUN mkdir app
EXPOSE 3000
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm" "start"]
