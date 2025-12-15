# ---------- ШАГ 1: сборка React ----------
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- ШАГ 2: запуск через nginx ----------
FROM nginx:alpine

COPY build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
