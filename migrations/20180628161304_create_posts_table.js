
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').unsigned().primary();
    table.string('title');
    table.string('description');
    table.integer('user_id');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  
};
