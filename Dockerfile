FROM node:20.11-alpine
WORKDIR /app
ENV NODE_ENV production
ENV PORT 1337
COPY . .
RUN rm -rf node_modules
RUN npm install
RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]
