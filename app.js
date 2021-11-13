

const express = require('express')
const app = express()
const todosRoutes = require('./routes')
const connectDB = require('./connect')
const cors = require('cors')

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)


require('dotenv').config()

app.use(express.json())

app.use('https://arcane-bayou-22136.herokuapp.com/api/v1/todos', todosRoutes)


// app.use(bodyParser.json());

const start = async () => {
    try{
        const connectString = process.env.MONGO_URI
        await connectDB(connectString)
        app.listen(5000,()=>{
            console.log("Server Started on port:3000...");
        })      
    }catch(error){
        console.log(error);
    }
}

start()

