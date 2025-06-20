FROM node:18-alpine AS build

RUN mkdir -p /app

COPY package.json /app/

WORKDIR /app

# Clear npm cache before installing dependencies
RUN npm cache clean --force && npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.21-alpine

COPY --from=build /app/dist/inncontroll-frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
