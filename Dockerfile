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

# Копируем package-файлы
COPY app/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Удаляем build-зависимости
RUN apk del .build-deps

# Копируем код приложения
COPY app/ .

# Переменные окружения для миграций в CI (БД на localhost)
ENV NODE_ENV=test
ENV DATABASE_HOST=localhost
ENV DATABASE_PORT=5432
ENV DATABASE_NAME=postgres
ENV DATABASE_USERNAME=postgres
ENV DATABASE_PASSWORD=password

CMD ["sh"]