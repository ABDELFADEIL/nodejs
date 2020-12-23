/*const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Aston, Bonne journée tout le monde');
})

server.listen(port, host, () => {
    console.log('server running! ');
})
*/

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: false}))

/*
app.get('/', (req, res) => {
    res.status(200).send('Hello tout le monde');
})
 */

app.get('/test', (req, res) => {
    res.status(200).send('Hello tout le monde en test');
})

app.post('/add', (req, res) => {
    console.log(req.body);
    const params = req.body;
    res.status(201).json(params);
    //res.status(201).send('added');
})
//server running

const userRouter = require('./route/user.js');

app.use('/users', userRouter);

app.listen(port, ()=> {
    console.log('server running!')
})
