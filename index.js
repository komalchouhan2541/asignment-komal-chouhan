const express = require('express');
const app = express();

const dbconnection =require("./mongoose/dbconnection")
const mongoose = require('mongoose');
const {roommodel} = require('./models/book/book-model');
const bookrouter= require("./routers/book/book-routers")

dbconnection.then((data)=>{
    
    console.log("data base connection successfull");
  })
 .catch((err)=>{
    console.log(" erroccured while connecting to database");
  });


app.use(bookrouter);
app.listen(8080,()=>{
    console.log(" my server has created port 8080")
})




