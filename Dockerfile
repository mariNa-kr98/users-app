# version of node
FROM node:23
# Directory to save image
WORKDIR /app
# Install all dependencies
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]