const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
// const data = {};

// const DB = 'mongodb+srv://USER:USER@cluster0.xbnqse2.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(DB);
// async function getData(){
//     let result = await client.connect();
//     let db = result.db('MajorUsers');
//     let collection = db.collection('COllegeSample');
//     console.log( await collection.find({}).toArray());
//     data.f = await collection.find().toArray();
// }

// getData();

// const d = [data.f];

// app.get('/data',(req,res)=>{
//     res.send(d);
// })


const data = require('./data')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.connect('mongodb+srv://USER:USER@cluster0.xbnqse2.mongodb.net/?retryWrites=true&w=majority');

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
    console.log("8080");
})