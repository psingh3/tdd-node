const Sequelize = require('sequelize')

const sequelize = new Sequelize('hoaxify', 'pssehmby', 'Singh321', {
  dialect: 'postgres'
  //   storage: './database.sqllite'
})

module.exports = sequelize
