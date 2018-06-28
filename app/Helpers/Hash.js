"use strict";
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  /**
   * Hash password
   * @param originPassword
   * @returns {Promise}
   */
  hash: function (originPassword) {
    return new Promise(function (resolve, reject) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) reject(err);
        bcrypt.hash(originPassword, salt, null, (err, hash) => {
          if (err) {
            reject(err);
          }
          else resolve(hash);
        });
      });
    });
  },

  compare: function (origin, hash) {
    return new Promise(function (resolve, reject) {
      bcrypt.compare(origin, hash, (err, result) => {
        if (err) {
          reject(err)
        }
        else resolve(result);
      });
    });
  }
};
