const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Model = Sequelize.Model

class User extends Model {}

User.init(
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'user_id'
    },
    user_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      unique: true
      //   validate: {
      //     isEmail: true
      //   }
    },
    password: {
      type: Sequelize.STRING(90)
    }
  },
  {
    sequelize,
    modelName: 'user',
    timestamps: 'true',
    paranoid: true
  }
)

module.exports = User
