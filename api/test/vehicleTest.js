const Vehicle = require("../models/Vehicle");

//Test
async function getVehicleQuery(){
    await Vehicle.query()
    .select()
    .then((vehicles)=> console.log(vehicles))
    .catch((error)=> console.log(error.message));
}

//create
async function createData(){
    const newVehicle = await Vehicle.query().insert({
        make: 2019,
        model: "model",
        color: "black",
        vehicleTypeId: 1,
        capacity: 4,
        mpg: 50,
        licenseState:"IN"
    });
}

//update
async function updateData(){
    await Vehicle.query()
    .findById(2)
    .patch({
        color: "White"
    });
}

//delete
async function deleteData(){
    await Vehicle.query().deleteById(2)
    .catch((error)=> console.log(error.message));
}

updateData();