# To build and run with Docker:
#
#  $ docker build -t ttf-front .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 ttf-front
#
FROM node:latest

RUN mkdir -p /ttf-front /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /ttf-front
COPY package.json typings.json /ttf-front/
RUN npm install --unsafe-perm=true

COPY . /ttf-front
RUN chown -R nodejs:nodejs /ttf-front
USER nodejs

CMD npm start
