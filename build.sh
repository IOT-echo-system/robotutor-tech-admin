#!/bin/bash

rm -rf node_modules
npm install --platform=linuxmusl --arch=x64 sharp
npm run build
docker buildx build --no-cache --platform=linux/amd64 -t shiviraj/robotutor-tech-admin:latest --push .

rm -rf node_modules
npm install --platform=linuxmusl --arch=arm64 sharp
npm run build
docker buildx build --no-cache --platform=linux/arm64 -t shiviraj/robotutor-tech-admin:aarm64 --push .
