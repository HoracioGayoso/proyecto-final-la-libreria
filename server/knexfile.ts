import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',       // Dirección del host de PostgreSQL
      port: 5432,              // Puerto de PostgreSQL (el mismo que mapeaste en Docker)
      user: 'postgres',        // Usuario de la base de datos
      password: 'postgres',    // Contraseña del usuario
      database: 'la-libreria'   // Nombre de la base de datos
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations' // Carpeta donde se almacenarán las migraciones
    },
    seeds: {
      directory: './src/seeds' // Carpeta donde se almacenarán los seeds
    }
  }
};

export default config;
