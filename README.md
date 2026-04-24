## Hexlet tests and linter status
[![Actions Status](https://github.com/MamBoota/devops-for-developers-project-74/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/MamBoota/devops-for-developers-project-74/actions)

## GitHub CI/CD status
[![CI/CD Pipeline](https://github.com/mamboota/devops-for-developers-project-74/actions/workflows/push.yml/badge.svg?branch=main)](https://github.com/mamboota/devops-for-developers-project-74/actions/workflows/push.yml)

## О проекте
Учебный проект Hexlet: контейнеризация Node.js-приложения, запуск тестов в Docker Compose и автоматизация проверки через GitHub Actions.

## Требования
- Docker
- Docker Compose
- GNU Make

## Быстрый старт
```bash
make setup
make dev
```

Приложение будет доступно на `http://localhost`.

## Полезные команды
```bash
make ci      # локальный прогон CI-сценария (с пересборкой и очисткой)
make down    # остановка и удаление контейнеров/сетей
make build   # сборка образа приложения
make push    # публикация образа в Docker Hub
```