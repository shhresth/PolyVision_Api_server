const mongoose = require('mongoose');

const College = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Dept: {
        Computer: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number
            },
            Approx_fees: Number
        },
        Civil: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number
            },
            Approx_fees: Number
        }
    },
    Location: {
        Region: String,
        District: String,
        Address: String
    },
    College_Status: String,
    Website: String,
    Autonomy_status: String,
    HostelAvailability: String
})

module.exports = mongoose.model('College', College);

// const dataSchema = new mongoose.Schema({
//     _id:mongoose.Schema.Types.ObjectId,
//     name:String,
//     email:String,
//     phone:Number
// })

// module.exports = mongoose.model('dataSchema',dataSchema);