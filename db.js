const knex = require("knex");

const conn = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "loja",
  },
});

module.exports = conn;
