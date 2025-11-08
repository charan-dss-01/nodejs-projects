import mongoose,{Schema} from 'mongoose'

const userSchema=new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true,
    }
},{timestamps:true});


const User=new mongoose.model("user",userSchema);

export default User;