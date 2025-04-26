import knex from 'knex';
import config from '../../knexfile';
/*
const dbConnection = knex({
  client: 'pg',
  connection: process.env.NODE_ENV === 'test'
    ? process.env.DATABASE_URL_TEST
    : process.env.DATABASE_URL,
  pool: {
    min: 0,
  },
});*/

const dbConnection = knex(config['development']);

export default dbConnection;
