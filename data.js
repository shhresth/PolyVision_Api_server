const cors = require('cors');
const express = require('express');
const router = express.Router();
const college = require('./dataSchema');
const mongoose = require('mongoose');
const { response } = require('express');

router.get("/",(req,res)=>{
    res.send({status:"Running"})
})

//Insering Records
// router.post("/",(req,res,next)=>{
//     const data = new college({
//     _id:new mongoose.Types.ObjectId,
//     Name:req.body.Name,
//     Dept:req.body.Dept,
//     Location:req.body.Location,
//     Website:req.body.Website,
//     Autonomy_status:req.body.Autonomy_status,
//     College_Status:req.body.College_Status,
//     HostelAvailability:req.body.HostelAvailability
//     })
//     data.save()
//     .then(result=>{
//         console.log(result);
//         res.status(200).json({
//             college : result
//         })
//     })
//     .catch(err=>{
//         console.log('error');
//         res.status(500).json({
//             error:err
//         })
//     })
// })

router.get("/colleges", async (req,res,next)=>{
    let College = await college.find();
    if(College.length>0){
        res.status(200).json({
            data:College
        })
    }else{
        res.send({result:"No Results Found"})
    }
})

router.get("/colleges/:Name",async (req,res)=>{
    let results = await college.find({Name:req.params.Name});
    if(results){
        res.status(200).json({
            data:results
        })
    }else{
        res.send({results:"No Record found"})
    }
})

module.exports = router;