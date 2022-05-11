FROM underconstruction.jfrog.io/docker-dev/node:13.12.0-alpine
WORKDIR usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
