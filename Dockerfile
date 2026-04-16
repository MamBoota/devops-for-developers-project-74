FROM node:20-alpine

WORKDIR /app

# Устанавливаем build-зависимости для компиляции нативных модулей
RUN apk add --no-cache --virtual .build-deps \
    python3 \
    make \
    g++ \
    gcc \
    libc-dev

# Копируем package-файлы
COPY app/package*.json ./

# Устанавливаем зависимости (включая нативные модули)
RUN npm install

# Удаляем build-зависимости после установки (уменьшаем размер образа)
RUN apk del .build-deps

# Копируем исходный код
COPY app/ .

# CMD будет переопределён в docker-compose
CMD ["sh"]