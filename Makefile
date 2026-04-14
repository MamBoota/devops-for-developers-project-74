setup: 
	docker-compose run app make setup install db-migrate

install:
	docker-compose run app make install npm install

db-migrate:
	docker-compose run app make db-migrate npm run migrate

build:
	docker-compose run app make build npm run build

prepare-env:
	docker-compose run app make prepare-env cp -n .env.example .env

up:
	docker-compose up

start:
	docker-compose run app make start NODE_ENV=production npm run start

dev:
	docker-compose run app make dev npx concurrently "make start-frontend" "make start-backend"

start-backend:
	npm start -- --watch --verbose-watch --ignore-watch='node_modules .git .sqlite'

start-frontend:
	npx webpack --watch --progress

lint:
	docker-compose run app make lint npx eslint .

lint-fix:
	docker-compose run app make lint-fix npx eslint --fix .

test:
	docker-compose run app make test NODE_ENV=test npm test -s
