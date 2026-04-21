require('dotenv').config();

module.exports = {
  // 🔥 development: SQLite для CI (где нет PostgreSQL), локально можно переопределить через .env
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
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
  // 🔥 test: in-memory SQLite для изолированных Jest-тестов
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
  },
};