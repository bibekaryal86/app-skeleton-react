# STAGE 1: BUILD #
FROM node:16-alpine as build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install --production
#RUN npm install \
#    webpack \
#    webpack-cli \
#    webpack-dev-server \
#    html-webpack-plugin \
#    fork-ts-checker-webpack-plugin\
#    eslint-webpack-plugin \
#    clean-webpack-plugin \
#    dotenv-webpack
COPY . /usr/src/app/
RUN npm run build

# STAGE 2: PRODUCTION DEPLOYMENT #
FROM nginx:1.21.4-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
