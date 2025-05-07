const express = require("express")
const app = express()

require ("./database/connection")


app.get("/books",(req,res)=>{

    //logic to fetch books from database
    res.json({
        name:"books fetch successfully",
    })
})

 app.post("/books",(req,res)=>{  
    res.json({
        message:"Book post successfully"
    })
 })

 app.delete("/books/:id",(req,res)=>{
    res.json({

        messege:"delete successfully",

    })
 })



 //postgresql://postgres.lxrszmolqtokgxbmrapw:12345678@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

 app.patch("/books/:id",(req,res)=>{
res.json({
    messege:"Update book successfully",
})

 })



app.listen(5000,function()
{
    console.log("Books backend started")
})