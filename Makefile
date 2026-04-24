.PHONY: setup test dev build push ci up down

# Установка зависимостей
setup:
	docker compose run --rm app make setup

# Запуск dev-сервера
dev:
	docker compose up

# Сборка продакшен-образа
build:
	docker compose -f docker-compose.yml build app

# Публикация образа
push:
	docker compose -f docker-compose.yml push app

# Команда для CI: запуск тестов через Docker Compose
ci:
	@sh -c ' \
		docker compose -f docker-compose.yml down -v --remove-orphans >/dev/null 2>&1 || true; \
		docker compose -f docker-compose.yml up --build --abort-on-container-exit --exit-code-from app; \
		status=$$?; \
		docker compose -f docker-compose.yml down -v --remove-orphans; \
		exit $$status \
	'

# Остановка контейнеров
down:
	docker compose down

up:
	docker compose up