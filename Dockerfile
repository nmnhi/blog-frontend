# 1. Base image
FROM node:20-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install deps
COPY package*.json ./
RUN npm install

# 4. Copy source code and build
COPY . .
RUN npm run build

# 5. Serve with static server
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# 6. Copy custom nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
