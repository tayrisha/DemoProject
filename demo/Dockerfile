# Use OpenJDK for running the application
FROM openjdk:17-jdk-alpine

# Set the working directory
WORKDIR /app

# Copy the built JAR file into the container (replace "app.jar" with the actual JAR file name)
COPY target/*.jar app.jar

# Expose the port the app runs on (adjust if needed)
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]
