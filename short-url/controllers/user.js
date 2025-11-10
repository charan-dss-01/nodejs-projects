import User from "../models/user.js";
import { v4 as uuidv4 } from 'uuid';
import { setUser } from "../services/auth.js";
export async function handleUserSignUp(req,res){
    try{
        const {name,email,password} = req.body;
        
        if(!name||!email|!password){
            return res.status(400).json({
                msg:"Please enter all feilds information"
            })
        }

        await User.create({
            name,
            email,
            password
        })

       

        return res.status(200).json({
            msg:"User created Successfully"
        })
        
    }catch(err){
        console.log("error:",err)
    }
}

export async function handleUserLogin(req,res){
    try{
        const {email,password} = req.body;
        
        if(!email|!password){
            return res.status(400).json({
                msg:"Please enter all feilds information"
            })
        }

        const user=await User.findOne({email,password});
        
        const sessionId =uuidv4();
        setUser(sessionId,user);
        res.cookie("uid",sessionId);

        return res.status(200).json({
            msg:"User loginned Successfully",
            user
        })

    }catch(err){
        console.log("error:",err)
    }
}