import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import env from  'dotenv'
import mongoose from "mongoose";
const app=express()
env.config()
const port=process.env.PORT||9000
app.listen(port,()=>console.log(`listening port ${port}`))

app.use(bodyParser.json({limit:'50mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))
app.use(cors)
app.use('/',(req,res)=>{
    res.send("hello wolrd")
})

mongoose.connect(process.env.CONNECTIONURL,{
    useNewUrlParser:true
})
