
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').unsigned().primary();
    table.string('email');
    table.string('password');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  
};
