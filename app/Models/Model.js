const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.
const knex = Knex({
  client: 'mysql',
  useNullAsDefault: true,
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'intern'
  }
});

// Give the knex object to objection.
Model.knex(knex);

module.exports = Model;