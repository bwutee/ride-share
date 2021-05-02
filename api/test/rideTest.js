const Ride = require("../models/Ride");

//Test
async function getRideQuery(){
    await Ride.query()
    .select()
    .then((rides)=> console.log(rides))
    .catch((error)=> console.log(error.message));
}

//create
async function createData(){
    const rideToTaylor = await Ride.query().insert({
        distance: 10,
        fuelPrice: 12,
        fee: 40,
        vehicleId: 1,
        fromLocationId: 1,
        toLocationId: 2
    });
}

//update
async function updateData(){
    const updateRide = await Ride.query()
    .findById(3)
    .patch({
        distance: 20
    });
}

//delete
async function deleteData(){
    await Ride.query().deleteById(3)
    .catch((error)=> console.log(error.message));
}

updateData();