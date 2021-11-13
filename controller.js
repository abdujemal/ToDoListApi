const ToDo = require('./db_model')
const asyncWrapper = require('./async')

const getAllTodos = asyncWrapper(async (req, res)=>{
    const todos = await ToDo.find({})
    res.setHeader('Access-Control-Allow-Origin','*')
    res.status(200).json(todos)    
})

const createTodo = asyncWrapper(async (req, res)=>{
    const todo = await ToDo.create(req.body)
    res.setHeader('Access-Control-Allow-Origin','*')
    res.status(201).json(req.body)
   
})

const deleteTodo = asyncWrapper(async (req, res, next)=>{
    const { id } = req.params
    const task = await ToDo.findOneAndDelete({ _id: id})
    if (!task) {
        res.send({err:`No task with id : ${id}`});
    }
    res.status(200).json({ task })    
})

const updateTodo = asyncWrapper(async (req, res, next)=>{
    const { id: taskID } = req.params

  const task = await ToDo.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task){
        console.log(`No task with id : ${taskID}`);
  }

  res.status(200).json({ task})
    
})

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}
