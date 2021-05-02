/*
// Connect knex to the database.
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'faraday.cse.taylor.edu',
        user: 'min_lee',
        password: 'pegediju',
        database: 'min_lee'
    }
});	

//objection
const objection = require("objection");
objection.Model.knex(knex);

//Models
//const { Model } = require("../db");
*/

const User = require("../models/User");

//Test
async function getUserQuery(){
    await User.query()
    .select()
    .then((users)=> console.log(users))
    .catch((error)=> console.log(error.message));
}
getUserQuery();



