const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const data = require('./data')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.connect('---Connection String---');

mongoose.connection.on('error',err=>{
    console.log('Connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log('Connection Successful');
});

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use("/",data);



app.listen(port, () => {
    console.log(port);
})
