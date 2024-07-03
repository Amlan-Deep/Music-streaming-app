const express = require('express'); 
const app = express();
const port = 8000;

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