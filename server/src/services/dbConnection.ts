import knex from 'knex';

const dbConnection = knex({
  client: 'pg',
  connection: process.env.NODE_ENV === 'test'
    ? process.env.DATABASE_URL_TEST
    : process.env.DATABASE_URL,
  pool: {
    min: 0,
  },
});

export default dbConnection;
