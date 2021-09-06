exports.up = function(knex) {
  return knex.schema.createTable('Ad', table => {
    table.increments('Id').primary();
    table.string('Title', 100);
    table.string('Description', 150);
    table.integer('CategoryId');
    table.integer('UserId');
    table.double('Price');
    table.boolean('HidePhone');
    table.integer('Status', 1);
    table.integer('Views');
    table.dateTime('CreatedAt');
    table.foreign('CategoryId').references('Id').inTable('Category');
    table.foreign('UserId').references('Id').inTable('User');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Ad');
};