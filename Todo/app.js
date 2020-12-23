
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: false}))



const todoRouter = require('./route/taskRouter.js');

app.use('/todo', todoRouter);

//server running
app.listen(port, ()=> {
    console.log('server running!')
})
