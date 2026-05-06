# Stage 1: Build Angular App
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy project files
COPY . .

# Give permission to ng
RUN chmod +x ./node_modules/.bin/ng

# Build Angular app
RUN ng build

# Stage 2: Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Angular 17 output path
COPY --from=build /app/dist/healthybazar/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]