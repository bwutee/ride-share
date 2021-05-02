const Authorization = require("../models/Authorization");

//Test
async function getAuthorizationQuery(){
    await Authorization.query()
    .select()
    .then((authorizations)=> console.log(authorizations))
    .catch((error)=> console.log(error.message));
}

getAuthorizationQuery();