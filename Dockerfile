# Create a new Dockerfile in the root directory of your project
FROM node:22-alpine3.19

# Set the working directory to /app
WORKDIR /app

# Copy all files from the current directory to /app/
COPY . .

# Install any necessary dependencies using npm or yarn
RUN npm install

# Expose port 3000 for use with React development server
EXPOSE 3000

# Start the React development server when the container is started
CMD ["react-scripts", "start"]