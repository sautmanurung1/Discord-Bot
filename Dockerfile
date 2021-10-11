FROM node:16
RUN mkdir -p /src/user/app
WORKDIR /src/user/app
RUN npm install
COPY package*.json ./
COPY . .
RUN npm install --production
EXPOSE 8080
CMD ["npm", "start"]