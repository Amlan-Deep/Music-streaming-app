const express = require('express'); 
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const port = 8000;
const connectionString = "mongodb+srv://amlan:" +
    process.env.MONGO_PASSWORD +
    "@cluster0.a7jrkd4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    })
    ;
//get API
app.get("/", (req, res) => {
    //req contains data for all request
    //res contains data for all response
    res.send("Hello World");
});

//listen to port at localhost:8000
app.listen(port, () => {
    console.log("Server is running on port"+port);
});