.PHONY: setup test dev build push ci up down

# Установка зависимостей
setup:
	docker-compose run --rm app make setup

# Запуск тестов
test:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

# Запуск dev-сервера
dev:
	docker-compose up

# Сборка продакшен-образа
build:
	docker-compose -f docker-compose.yml build app

# Публикация образа
push:
	docker-compose -f docker-compose.yml push app

# Команда для CI: запуск тестов через Docker Compose
ci:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

# Остановка контейнеров
down:
	docker-compose down

up:
	docker-compose up