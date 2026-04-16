require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_NAME || 'postgres',
    host: process.env.DATABASE_HOST || 'db',
    port: process.env.DATABASE_PORT || 5432,
    dialect: 'postgres',
    logging: console.log, // Опционально: логи запросов в консоль
  },
  test: {
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_NAME || 'postgres',
    host: process.env.DATABASE_HOST || 'db',
    port: process.env.DATABASE_PORT || 5432,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
