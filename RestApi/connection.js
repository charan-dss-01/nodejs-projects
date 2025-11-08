import mongoose,{Schema} from 'mongoose'

export default async function connect(url){
    try{
        await mongoose.connect(url);
        console.log("Db connected succesfully");
    }catch(err){
        console.log("error while connecting to db:",err);
    }
}