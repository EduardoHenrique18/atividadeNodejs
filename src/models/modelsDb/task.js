const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/db')

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: { type: DataTypes.STRING },
  status: {
    type: DataTypes.STRING,
    validate: {
      isIn: [['pendente', 'andamento', 'concluida']]
    }
  },
  createdAt: { type: DataTypes.DATE }
})

module.exports = Task
