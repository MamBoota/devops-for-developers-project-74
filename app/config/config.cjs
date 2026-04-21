require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    // 🔥 По умолчанию localhost (для CI и локального запуска без docker-compose)
    // 🔥 В docker-compose переопределяется через DATABASE_HOST=db
    host: process.env.DATABASE_HOST || 'localhost',
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
    // 🔥 По умолчанию localhost (для CI и локального запуска без docker-compose)
    // 🔥 В docker-compose переопределяется через DATABASE_HOST=db
    host: process.env.DATABASE_HOST || 'localhost',
    logging: false,
  },
};