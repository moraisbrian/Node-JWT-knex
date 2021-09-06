require('dotenv').config();

module.exports = {
  client: process.env.DATABASE_DIALECT,
  connection: {
    database: process.env.DATABASE,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'KnexMigrations',
    directory: './src/app/database/migrations'
  },
  seeds: {
    directory: './src/app/database/seeds'
  }
};
