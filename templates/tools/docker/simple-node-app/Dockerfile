# Use the official Node.js image
FROM node:23.3.0-bookworm-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY app/package*.json ./

# Install dependencies
RUN npm install

# Copy the application files
COPY app/ .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]