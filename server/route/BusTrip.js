const router = require("express").Router()

const BusTrip  = require("../models/BusTrip")

router.route("/").get(async (req,res) =>{
    await BusTrip.find().then((data) =>{
         res.status(200).send({status :"Data Recieved",Routes : data});
     }).catch((err)=>{
         res.status(400).send({status :err})
     })
 })

 router.route("/createBusTrip").post(async(req,res) =>{
    const {busno,
        routeno,
        capacity,
        type,
        roottype,
        time,
        status,
        from,
        to,
        noofbus,
        price} = req.body;

    const newBusTrip = new BusTrip({
        busno,
        routeno,
        capacity,
        type,
        roottype,
        time,
        status,
        from,
        to,
        noofbus,
        price
    })

    newBusTrip.save().then(()=>{
        res.status(200).send({status:"Bus trip Added"})
    }).catch(err =>{
        res.status(400).send({status:err})

    })
 })


module.exports = router;