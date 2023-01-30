const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors());

const port = process.env.PORT || 3000;

const apiData = require('./data.json');

app.get('/',(req,res)=>{
    res.send('i am live');
})

app.get('/Service',(req,res)=>{
    res.send(apiData);
})

app.listen(port,()=>{
    console.log('i am live')
})