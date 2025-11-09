import mongoose from "mongoose";

export default async function connect(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/short-url");
        console.log("succesfully connected to db");
    }catch(err){
        console.log("Error in connecting to DB...");
    }
}

