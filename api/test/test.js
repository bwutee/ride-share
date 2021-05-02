
// Knex Connection
const knex = require("knex")({
    client: "pg",
    connection: {
      host: "faraday.cse.taylor.edu", // PostgreSQL server
      user: "min_lee", // Your user name
      password: "pegediju", // Your password
      database: "min_lee", // Your database name
    },
});
  
// Objection
const objection = require("objection");
objection.Model.knex(knex);
​
// Models
const User = require("../models/User"); // the path to your models
​
// Test
console.log(`Here are all my Users : ${ User.query() }`);
