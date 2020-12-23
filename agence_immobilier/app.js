const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const agentRouter = require('./routes/agent.router');
const achteurRouter = require('./routes/achteur.router');
const bienRouter = require('./routes/bien.router');
const annonceRouter = require('./routes/annonce.router');
const achatRouter = require('./routes/achat.router');
const caracteristqueRouter = require('./routes/caracteristque.router');





app.use('/agents', agentRouter);
app.use('/achteurs', achteurRouter);
app.use('/achteurs', achteurRouter);

app.use('/biens', bienRouter);
app.use('/annonces', annonceRouter);
app.use('/achats', achatRouter);
app.use('/caracteristques', caracteristqueRouter);



app.listen( port, ()=>{
    console.log('Server running');
})

module.exports = app;


