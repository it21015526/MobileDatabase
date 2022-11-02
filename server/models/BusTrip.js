const mongoose = require('mongoose');


const BusTripSchema = new mongoose.Schema({

    busno:{
        type: String,
    },
    routeno:{
        type: String,
    },
    capacity:{
        type: String,
    },
    type:{
        type: String,
    },
    roottype:{
        type: String,
    },
  
    time:{
        type: String,
    },
    status:{
        type: String,
    },
    from:{
        type: String,
    },
    to:{
        type: String,
    },
    noofbus:{
        type: String,
    },
    price:{
        type: String,
    },
})

const BusTrip = mongoose.model("BusTrip", BusTripSchema);

module.exports = BusTrip;


