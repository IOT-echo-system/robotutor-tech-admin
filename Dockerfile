FROM node:20.11-alpine
WORKDIR /app
ENV NODE_ENV production
ENV PORT 1337
RUN npm run build
COPY . .
EXPOSE 1337
CMD ["npm", "start"]
