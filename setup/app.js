import express from 'express';

const app=express();

app.get("/",(req,res)=>{
    res.send("hello world");
});


app.get("/about",(req,res)=>{
    res.send(`About page name is : ${req.query.name||"no name is passed in query"}`);
});


app.get("/profile",(req,res)=>{
    res.send(`Profile page id is : ${req.query.id+" "+req.query.name || "no id is passed in query"}`);
});


app.listen(8000,(req,res)=>{
    console.log("server is running at 8000");
})