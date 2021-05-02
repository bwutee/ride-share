const State = require("../models/State");

//Test
async function getStateQuery() {
    await State.query()
        .select()
        .then((states) => console.log(states))
        .catch((error) => console.log(error.message));
}
//create
async function createData() {
    await State.query().insert({
        abbreviation: "AZ",
        name: "Arizonaa"
    });
}

//update
async function updateData() {
    await State.query()
        .where('abbreviation','NY')
        .patch({
            name: "Newyork"
        });
}

//delete
async function deleteData() {
    await State.query().deleteById(2)
        .catch((error) => console.log(error.message));
}
updateData();