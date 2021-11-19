const pg = require('pg');

const config = {
  database: 'weekend-to-do-app', 
  host: 'localhost', 
  port: 5432, 
  max: 10, 
  idleTimeoutMillis: 30000 
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("Postgres Connected: weekend-to-do-app");
});

pool.on("error", (err) => {
  console.log("Postgres connection error!", err);
});

module.exports = pool;