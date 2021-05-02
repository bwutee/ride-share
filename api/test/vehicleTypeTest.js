const VehicleType = require("../models/VehicleType");

//Test
async function getVehicleTypeQuery(){
    await VehicleType.query()
    .select()
    .then((vehicleTypes)=> console.log(vehicleTypes))
    .catch((error)=> console.log(error.message));
}

//create
async function createData(){
    await VehicleType.query().insert({
        type: "Sports Car"
    });
}

//update
async function updateData(){
    await VehicleType.query()
    .findById(2)
    .patch({
        type: "Sedan"
    });
}

//delete
async function deleteData(){
    await VehicleType.query().deleteById(2)
    .catch((error)=> console.log(error.message));
}
updateData();