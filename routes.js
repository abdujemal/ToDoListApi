const express = require('express')
const router = express.Router()

const {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require('./controller')

router.route('/').get(getAllTodos).post(createTodo)
router.route('/:id').patch(updateTodo).delete(deleteTodo)

module.exports = router