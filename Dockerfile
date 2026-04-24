FROM node:20-alpine

WORKDIR /app

# Build-зависимости для нативных модулей
RUN apk add --no-cache --virtual .build-deps \
    python3 \
    make \
    g++ \
    gcc \
    libc-dev \
    py3-setuptools

COPY app/package*.json ./
RUN npm install

# Удаляем build-зависимости
RUN apk del .build-deps

# make нужен в runtime для команд из Makefile
RUN apk add --no-cache make

COPY app/ .

CMD ["sh"]
