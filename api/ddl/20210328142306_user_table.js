
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('user', table => {
            table.increments();
            table.string('name');
            table.integer('age');
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('todo');
};
