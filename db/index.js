const conn = require('./conn');
const User = require('./User');

const sync = () =>{
  return conn.sync({ force: true})
}

const seed = () => {
  return Promise.all([
      User.create({ name: 'Bob', rating: 4}),
      User.create({ name: 'Joe', rating: 2}),
      User.create({ name: 'Pete', rating: 6}),
      User.create({ name: 'Amy', rating: 1})
  ])
}

module.exports = {
  sync,
  seed,
  models: {
    User
  }
}
