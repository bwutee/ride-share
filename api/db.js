// Connect knex to the database.
const knex = require("knex")({
    client: "pg",
    connection: {
        host: "faraday.cse.taylor.edu",
        user: "min_lee",
        password: "pegediju",
        database: "min_lee"
    }
});

// Connect objection to knex.
const objection = require("objection");
const Model = objection.Model;
Model.knex(knex);

// Export these objects.
module.exports = { knex, Model };
