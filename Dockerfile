# Start from the node image v12
FROM node:12-alpine

# Change the work directory app
WORKDIR /app

# Copy the package dependencies
COPY ./package.json .
COPY ./package-lock.json .

# Install dependencies
RUN npm install

# Copy the directory
COPY . .

# Compile files in the dist folder
RUN npm run compile

# Expose the port 3000
EXPOSE 3000

# Run the server
CMD ["npm","run","start"]
