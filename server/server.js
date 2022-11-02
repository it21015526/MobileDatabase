const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotnev = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlparser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb Connection is success!");
})

// const userRoutes = require("./routes/user_routes.js");
// app.use("/user", userRoutes);

const BusTrip = require("./route/BusTrip.js");
app.use("/BusTrip", BusTrip);


app.listen(PORT,() =>{
    console.log('server is up and running on port number:', PORT);
})