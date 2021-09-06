exports.up = function (knex) {
    return knex.schema.createTable('User', table => {
        table.increments('Id').primary();
        table.string('Name', 50);
        table.string('Email', 60);
        table.string('Phone', 15);
        table.string('Password', 64);
        table.integer('Type', 1);
        table.dateTime('CreatedAt');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('User');
};
