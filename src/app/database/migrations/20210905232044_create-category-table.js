exports.up = function(knex) {
  return knex.schema.createTable('Category', table => {
    table.increments('Id').primary();
    table.string('Description', 150);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Category');
};
