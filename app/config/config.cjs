require('dotenv').config();

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'database.sqlite',
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
    host: process.env.DATABASE_HOST || 'localhost',
    logging: false,
  },
};