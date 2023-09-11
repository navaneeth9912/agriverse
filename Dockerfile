FROM node:18-alpine
WORKDIR /src
COPY . ./
RUN npm i -f
RUN npm run build
#COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
