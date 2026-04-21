require('dotenv').config();

// 🔥 GitHub Actions автоматически устанавливает CI=true
const isCI = process.env.CI === 'true';

module.exports = {
  development: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    // 🔥 В CI: localhost (БД предоставлена инфраструктурой)
    // 🔥 Локально: DATABASE_HOST из env или 'db' по умолчанию для docker-compose
    host: isCI ? 'localhost' : (process.env.DATABASE_HOST || 'db'),
    logging: false,
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
    // 🔥 Тот же принцип: в CI - localhost, локально - из env или 'db'
    host: isCI ? 'localhost' : (process.env.DATABASE_HOST || 'db'),
    logging: false,
  },
};