import mongoose,{Schema} from "mongoose";
import User from "./user.js";


const urlSchema=new Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectionUrl:{
        type:String,
        required:true
    },
    visitedHistory:[
        {
            timestamp:{
                type:Number
            }
        }
    ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    }
},{
    timestamps:true
})


const Url=new mongoose.model("url",urlSchema);

export default Url;