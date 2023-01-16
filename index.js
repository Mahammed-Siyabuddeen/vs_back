import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import env from  'dotenv'
import mongoose from "mongoose";
import chartSchema from "./chartSchema.js";
const app=express()
env.config()
const port=process.env.PORT||8000
app.listen(port,()=>console.log(`listening port ${port}`))

app.use(bodyParser.json({limit:'50mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))
app.use(cors)
app.use('/',(req,res)=>{
    try {
        chartSchema.find().then((data)=>{
            res.status(200).json(data)
        }).catch((error)=>{
            res.status(404).send("error message ")
        })
    } catch (error) {
        res.send("error")
    }
})
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true
})
