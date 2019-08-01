FROM node 
MAINTAINER Fernando Ghinzelli
COPY . /var/www
ENV PORT=3000
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start
EXPOSE $PORT