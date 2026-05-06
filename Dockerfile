# Stage 1: Build Angular App
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build Angular app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build files
COPY --from=build /app/dist/healthybazar/browser /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]