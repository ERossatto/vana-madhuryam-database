# ========= STAGE 1: Build the app =========
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install --production

COPY . .
RUN npm run build

# ========= STAGE 2: Run the app =========
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main"]
