// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
      database: 'intern',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
};
