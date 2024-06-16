#!/bin/bash

rm -rf node_modules
npm install && \
npm run build && \
docker buildx build --no-cache --platform=linux/arm64,linux/amd64 -t shiviraj/robotutor-tech-admin:latest --push .
