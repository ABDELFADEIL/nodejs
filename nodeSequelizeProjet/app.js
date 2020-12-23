const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.json());


const giftRouter = require('./routes/gift');
const humanRouter = require('./routes/human');
const locomotionRouter = require('./routes/locomotion');


app.use('/gifts', giftRouter);
app.use('/humans', humanRouter);
app.use('/locomotions', locomotionRouter);

app.listen( port, ()=>{
    console.log('Server running');
})
