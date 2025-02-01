# Use the official Nginx image to serve the built app
FROM nginx:stable-alpine

# Copy the build output to Nginx's html directory
COPY dist /usr/share/nginx/html

# Expose port 80 for the server
EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
