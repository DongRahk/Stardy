//몽고디비 연결
import dotenv from "dotenv";
//require('dotenv').config();
//console.log(process.env.MONGODB_URL)
import mongoose from 'mongoose';
import express  from "express";

dotenv.config();
const server = express();
//const mongoose = require('mongoose');
server.use(express.json());
mongoose.connect(process.env.MONGODB_URL,
 {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,
 },
    (err)=>{
    if(err){
        console.log("Err",err);
    }else{
        console.log("Connection Sucessful");
        server.listen(4000,()=> console.log("Server started1"));
    }
});