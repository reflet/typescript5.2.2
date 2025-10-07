FROM node:18.16

# Create an application directory.
WORKDIR /usr/src

# Bundle application sources.
COPY ./src/ /usr/src
RUN rm -rf node_modules js

# Install application dependencies.
RUN npm install

# build in test mode and create a js folder.
RUN npx tsc

# react applicaiton.
COPY ./src-react/ /usr/src-react
RUN cd /usr/src-react && npm install && cd /usr/src

