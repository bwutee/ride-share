
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: "Jorden", age:24},
        {name: "Kit", age:20}
      ]);
    });
};
