const asyncHandler = require('express-async-handler')
const Task = require('../models/task')

const index = asyncHandler(async(req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
})

const store = asyncHandler(async(req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error('Provide name value!')
    }
    const task = await Task.create({
        name: req.body.name
    })
    res.status(201).json(task)
})

const update = asyncHandler(async(req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error('Provide name value!')
    }

    const task = await Task.findById(req.params.id)
    if (!task) {
        res.status(400)
        throw new Error('Task not found!')
    }
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedTask)
})

const destroy = asyncHandler(async(req, res) => {
    const task = await Task.findById(req.params.id)
    if (!task) {
        res.status(400)
        throw new Error('Task not found!')
    }
    await task.remove()
    res.status(200).json({
        id: req.params.id,
        message: `Task removed successfully!`
    })
})

module.exports = {
    index,
    store,
    update,
    destroy
}