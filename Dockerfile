# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Adicione a variável de ambiente NODE_TLS_REJECT_UNAUTHORIZED para ignorar a verificação de certificados SSL
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npx prisma generate
EXPOSE 4000
RUN npm run build

# Stage 2: Run
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app .
CMD ["npm", "run", "start:prod"]