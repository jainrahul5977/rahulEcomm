// module imports
const express  = require("express")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const {userRouter} = require("./routes/userRouter")

// Load environment variables from .env file
dotenv.config();
// create the new express app

const app = express();

app.get('/', (req,res)=>{
    return res.send({status : "successfull",message : "Testing the get route",data:{}})
});

app.use("/user",userRouter)

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}`);

});