const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'must provide title'],
        trim: true,
        maxlength: [20, 'title can not be more than 20 characters'],
    },
    description: {
        type: String,
        require: [true, 'must provide description'],
        trim: true,
        maxlength: [50, 'discription can not be more than 20 characters'],
    },
    date: {
        type: String,
        require: [true, 'must provide date'],
        trim: true,
        maxlength: [20, 'date can not be more than 20 characters'],
    },
    time: {
        type: String,
        require: [true, 'must provide time'],
        trim: true,
        maxlength: [20, 'time can not be more than 20 characters'],
    },
})

module.exports = mongoose.model('Task', ToDoSchema)