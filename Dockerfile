# Pulls in a node image
FROM node:16

# Sets a working directory
WORKDIR /home/node/app

# Copies package.json
COPY package*.json ./

# Insall node modules
RUN npm install

# Copies all project code into the container
COPY . .

# Sets the environment variable
ENV NODE_PATH=./build

# Builds the TS code
RUN npm run build
