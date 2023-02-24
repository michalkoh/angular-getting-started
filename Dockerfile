# BASE IMAGE build
FROM node:latest as build
WORKDIR /usr/local/app

COPY ./ /usr/local/app

# Install Angular
RUN npm install

# Build the app
RUN npm run build

# BASE IMAGE runtime
FROM nginx:latest

COPY --from=build /usr/local/app/dist/angular-getting-started /usr/share/nginx/html

EXPOSE 80