const express = require("express");
//to create app
const app = express()

//route for api
app.get("/api", (req, res)=>{
    //sends a json array of users
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

//port runs on 5000, starts our backend
app.listen(5000, () => {
    console.log("Server started on port 5000")
})