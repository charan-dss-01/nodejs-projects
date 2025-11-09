import Url from "../models/url.js"
import shortid from "shortid";

export async function creteShortId(req,res) {
    const { redirectionUrl } = req.body;
    console.log(req.body);
    if(!redirectionUrl|| !req.body){
        return res.status(400).json({
            msg:"please pass the main url"
        });
    }
    console.log(redirectionUrl)
    const shortId=shortid.generate();

    await Url.create({
        shortId,
        redirectionUrl,
        visitedHistory:[]
    });

    return res.status(200).json({
        id:shortId,
        msg:"succesfully generated short id"
    })
}


export async function getOriginalUrl(req,res){
    const {id}=req.params;
    if(!id){
        return res.status(400).json({
            msg:"please pass the id main url"
        });
    }
    const entry=await Url.findOneAndUpdate({shortId:id},{
        $push:{
            visitedHistory:{
                timestamp:Date.now()
            }
        }
    });
    //console.log(entry);
    res.redirect(entry.redirectionUrl);
}


export async function analytics(req,res){
    const {id}=req.params;
    if(!id){
        return res.status(400).json({
            msg:"please pass the id main url"
        });
    }
    const entry=await Url.findOne({shortId:id});
    return res.status(200).json({
        count:entry.visitedHistory.length,
        analytics:entry.visitedHistory
    })
}


