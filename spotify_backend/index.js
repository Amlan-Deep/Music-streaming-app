const express = require('express'); 
const mongoose = require('mongoose');
require("dotenv").config();
const User = require("./models/User");
const passport = require('passport');
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

//setup passport-jwt
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "asdfghjhgfd";
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

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