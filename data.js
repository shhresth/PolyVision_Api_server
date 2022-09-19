const cors = require('cors');
const express = require('express');
const router = express.Router();
const dataSchema = require('./dataSchema');
const mongoose = require('mongoose');

router.post("/",(req,res,next)=>{
    const data = new dataSchema({
    _id:new mongoose.Types.ObjectId,
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone
    })
    data.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newdataSchema : result
        })
    })
    .catch(err=>{
        console.log('error');
        res.status(500).json({
            error:err
        })
    })
})

router.get("/",(req,res,next)=>{
    // res.set('Access-Control-Allow-Origin', 'https://vk-api-for-me-mm.herokuapp.com/data')
    dataSchema.find()
    .then(result=>{
        res.status(200).json({
            data:result
        })
    })
    .catch(err=>{
        console.log('error');
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;