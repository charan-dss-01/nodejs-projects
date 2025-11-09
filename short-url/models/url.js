import mongoose,{Schema} from "mongoose";


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
    ]
},{
    timestamps:true
})


const Url=new mongoose.model("url",urlSchema);

export default Url;