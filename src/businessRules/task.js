const task = require('../models/modelsDb/task')

module.exports = class TaskBr {
  async createTask (req, res) {
    const { description, status } = req.body
    try {
      const createdTaks = await task.create({
        description,
        status
      })

      if (!createdTaks) {
        throw new Error('task cant created')
      }

      res.status(200).send({ message: 'successfully created' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'task cant created' })
    }
  }

  async getTasks (req, res) {
    try {
      const tasks = await task.findAll({
        atributes: ['id', 'description', 'status', 'createdAt', 'updatedAt']
      })

      res.status(200).send({ data: tasks })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'cant get tasks' })
    }
  }

  async deleteTasks (req, res) {
    const { id } = req.body
    try {
      await task.destroy({
        where: {
          id: id
        }
      })

      res.status(200).send({ message: 'successfully deleted' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'cant delete this task' })
    }
  }

  async updateTasks (req, res) {
    const { id, description, status } = req.body
    try {
      await task.update(
        { description: description, status: status },
        { where: { id: id } }
      )

      res.status(200).send({ data: { id, description, status } })
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'cant update this task' })
    }
  }
}
