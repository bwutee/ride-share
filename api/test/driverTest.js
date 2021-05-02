const Driver = require("../models/Driver");

//retrieve
async function getDriverQuery(){
    await Driver.query()
    .select()
    .then((drivers)=> console.log(drivers))
    .catch((error)=> console.log(error.message));
}

//create
async function createData(){
    const createDriver = await Driver.query().insert({
        userId: 5,
        licenseNumber: 12345678,
        licenseState: 'IN'
    });
}

//update
async function updateData(){
    const updateDriver = await Driver.query()
    .findById(4)
    .patch({
        licenseState: 'NY'
    });
}

//delete
async function deleteData(){
    await Driver.query().deleteById(4)
    .catch((error)=> console.log(error.message));
}
