const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const studentRouter = require('./routes/student');
const noteRouter = require('./routes/note');
const subjectRouter = require('./routes/subject');
const levelRouter = require('./routes/level');


app.use('/students', studentRouter);
app.use('/notes', noteRouter);
app.use('/subjects', subjectRouter);
app.use('/levels', levelRouter);

app.listen( port, ()=>{
  console.log('Server running');
})

module.exports = app;