FROM node:18-slim

# RUN apt-get update \
#     && apt-get remove --purge -y procps \
#     && apt-get autoremove -y \
#     && apt-get clean \
#     && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.7.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

USER node

WORKDIR /usr/src/app