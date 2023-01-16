import express from "express";

const app=express()
const port=process.env.PORT||9000
app.listen(port,()=>console.log(`listening port ${port}`))

app.use('/',(req,res)=>{
    res.send("hello wolrd")
})