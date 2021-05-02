const Drivers = require("../models/Drivers");

//Retrieve
async function getDriversQuery(){
    await Drivers.query()
    .select()
    .then((driversId)=> console.log(driversId))
    .catch((error)=> console.log(error.message));
}
