const Passenger = require("../models/Passenger");

//Test
async function getPassengerQuery(){
    await Passenger.query()
    .select()
    .then((passengers)=> console.log(passengers))
    .catch((error)=> console.log(error.message));
}

getPassengerQuery();