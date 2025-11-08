import express from "express";
import mongoose,{Schema} from 'mongoose'
import fs from "fs"
import connect from "./connection.js"
import User from "./models/user.js"
import userRoutes from "./routes/user.js";


const app=express()

app.use(express.json())

connect("mongodb://127.0.0.1:27017/mypro-1");

app.use("/user",userRoutes);


app.listen(8000,()=>{
    console.log("Server is running");
})