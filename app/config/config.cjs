require('dotenv').config();

// Определяем, что мы в CI (GitHub Actions, GitLab CI, etc.)
const isCI = process.env.CI === 'true';

module.exports = {
  development: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    // В CI: всегда localhost (тестовая БД)
    // Локально: env-переменная или 'db' для docker-compose
    host: isCI ? 'localhost' : (process.env.DATABASE_HOST || 'db'),
  },
  production: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
  },
  test: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || 'localhost',
  },
};