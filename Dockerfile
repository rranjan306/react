############################################################
# Dockerfile to build React App UI
#############################################################


# Pull base image.
FROM node:10-alpine

# Copy build
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build