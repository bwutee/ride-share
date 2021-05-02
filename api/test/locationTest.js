const Location = require("../models/Location");

//Test
async function getLocationQuery(){
    await Location.query()
    .select()
    .then((locations)=> console.log(locations))
    .catch((error)=> console.log(error.message));
}
//create
async function createData() {
    await Location.query().insert({
        name: "testLocation_name",
        address: "testLocation_address",
        city: "testLocation_city",
        state: "NY",
        zipCode: "00000",
    });
}

//update
async function updateData() {
    await Location.query()
        .findById(4)
        .patch({
            name: "Newyork"
        });
}

//delete
async function deleteData() {
    await Location.query().deleteById(2)
        .catch((error) => console.log(error.message));
}
updateData();