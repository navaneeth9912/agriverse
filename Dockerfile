FROM node:18-alpine
WORKDIR /src
COPY . ./
RUN yarn install
RUN yarn run build
#COPY . ./
EXPOSE 3000
CMD ["yarn", "start"]
