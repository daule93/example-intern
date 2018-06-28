const Model = require('./Model');
const User = require('./User');

class Post extends Model {

  static get tableName() {
    return 'posts';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'posts.user_id',
          to: 'users.id'
        }
      }
    }
  }

  async $beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  $beforeUpdate() {
    this.updated_at = new Date();
  }
}

module.exports = Post;