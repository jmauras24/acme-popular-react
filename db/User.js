const conn = require('./conn');
const { Sequelize } = conn;

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = User;
