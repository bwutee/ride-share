const User = require("../models/User");

//Test

//retrieve
async function getUserQuery(){
    await User.query()
    .select()
    .then((users)=> console.log(users))
    .catch((error)=> console.log(error.message));
}


//create
async function createData(){
    const Tom = await User.query().insert({
        firstName: 'Tom',
        lastName: 'Kim',
        email: 'tom@example.com'
    });
}

//update
async function updateData(){
    const updateTom = await User.query()
    .findById(3)
    .patch({
        firstName: 'Timothy'
    });
}

//delete
async function deleteData(){
    await User.query().deleteById(4)
    .catch((error)=> console.log(error.message));
}
//related Query
async function relatedQuery(){
    const drivers = await User.relatedQuery('driver').for(1);
    console.log(drivers);
    // .select()
    // .where('id', 1)
}
//createData();
//getUserQuery();
//updateData();
//deleteData();
relatedQuery();