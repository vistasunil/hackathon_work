FROM node:alpine
WORKDIR /usr/src/next-app
COPY build/. .
RUN apk add curl
RUN yarn
CMD ["yarn", "dev", "-p", "4000"]
