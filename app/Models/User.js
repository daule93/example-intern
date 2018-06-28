const Model = require('./Model');

const Hash = require('../Helpers/Hash');

class User extends Model {

  static get tableName() {
    return 'users';
  }

  static get relationMappings() {

  }

  async $beforeInsert() {
    this.password =await Hash.hash(this.password);
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  $beforeUpdate() {
    this.updated_at = new Date();
  }
}

module.exports = User;