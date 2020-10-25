const Task = require("../models/Task.model");

const findTasks = () => Task.find({}).sort({ isDone: 1, _id: -1 });

const addTask = async (req, res, next) => {
    const { text } = req.body;
    const task = new Task({ text });
    await task.save();
    res.send(task);
}

const getTasks = async (req, res, next) => {
    const data = await findTasks();
    res.send(data);
}

const toggleDone = async (req, res, next) => {
    const { id, isDone } = req.body;
    await Task.updateOne({ _id: id }, { isDone })
    const tasks = await findTasks()
    res.send(tasks)
}

const deleteTask = async (req, res, next) => {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    res.send(deletedTask)
}

module.exports = {
    addTask,
    getTasks,
    toggleDone,
    deleteTask
}