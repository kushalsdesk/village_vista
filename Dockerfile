# syntax=docker/dockerfile:1

# Base image with Node.js
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies only in production mode
ENV NODE_ENV=development
RUN npm install --omit=dev

# Development stage
FROM base AS development

# Install all dependencies (including devDependencies)
RUN npm install

# Copy application files
COPY . .

# Expose development port
EXPOSE 3000

# Use development mode
ENV NODE_ENV=development

# Start the application in development mode
ENTRYPOINT npm run dev 

# # Production stage
# FROM base AS production
#
# # Copy application files
# COPY . .
#
# # Build the production application
# RUN npm run build
#
# # Expose production port
# EXPOSE 3000
#
# # Start the application in production mode
# CMD ["npm", "run", "start"]
