FROM node:20-alpine

WORKDIR /app

# Копируем файлы зависимостей из папки app
COPY app/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код приложения
COPY app/ .

# CMD будет переопределён в docker-compose
CMD ["sh"]