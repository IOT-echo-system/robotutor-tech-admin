#!/bin/bash

docker buildx build --no-cache --platform=linux/amd64 -t shiviraj/robotutor-tech-admin:latest --push .
