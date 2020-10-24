const express = require("express");

const users = [
    {id:1,name:"Tuna Aydinoglu",city:"Antalya"},
    {id:2,name:"Ali Biner",city:"Isparta"},
    {id:3,name:"Furkan Titiz",city:"Samsun"}
];

const app = express();

const PORT = 3200;


//Get Request
app.get("/users",(req,res,next)=>{
    res.json(users);
});


app.listen(PORT,()=>{
    console.log("Server Started:"+PORT);
})