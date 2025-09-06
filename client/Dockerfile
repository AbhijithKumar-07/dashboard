# ---------- Build Stage ----------
FROM node:18 AS builder   # Use Debian-based Node (not Alpine)

# Set working directory
WORKDIR /app

# Copy package files and install dependencies (devDependencies needed for build)
COPY package*.json ./
RUN npm install

# Copy all source files and build React app
COPY . .
RUN npm run build   # Output will be in /app/build

# ---------- Nginx Stage ----------
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy React build from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration for SPA routing
COPY ./nginx/app.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

