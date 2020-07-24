require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'stevemarquez',
  host: 'localhost',
  database: 'foodtruck',
  password: '',
  port: 5432,
});

module.exports = pool;
