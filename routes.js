const TaskBr = require('./src/businessRules/task')

const routes = function (app) {
  const task = new TaskBr()

  app.route('/task')
    .post(task.createTask)
    .get(task.getTasks)
    .put(task.updateTasks)
    .delete(task.deleteTasks)
}

module.exports = routes
