FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose development server port
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
