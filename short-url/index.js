import express from "express"
import connect from "./connection.js";
import cookieParser from "cookie-parser";


import urlRouter from "./routes/url.js"
import userRouter from "./routes/user.js"
import {isLoggined} from "./middleware/auth.js"


const app=express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.use("/url",isLoggined,urlRouter);
app.use("/user",userRouter);



connect();


app.listen(8000,()=>{
    console.log("server is running at port 8000");
})