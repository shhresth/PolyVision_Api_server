const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:Number
})

module.exports = mongoose.model('dataSchema',dataSchema);