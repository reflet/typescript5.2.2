FROM node:18.16

# Create an application directory.
WORKDIR /usr/src/app

# Bundle application sources.
COPY ./src/ /usr/src/app
RUN rm -rf node_modules js

# Install application dependencies.
RUN npm install

# build in test mode and create a js folder.
RUN npx tsc

EXPOSE 8080
