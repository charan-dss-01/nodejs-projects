import express from "express"
import connect from "./connection.js";
import urlRouter from "./routes/url.js"

const app=express();

app.use(express.json());

// (Optional) To parse form data (if you send via HTML form)
app.use(express.urlencoded({ extended: true }));


app.use("/url",urlRouter);


connect();


app.listen(8000,()=>{
    console.log("server is running at port 8000");
})