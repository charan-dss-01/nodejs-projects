import express,{Router} from "express";
import {creteShortId,getOriginalUrl,analytics,getAllUserUrl} from "../controllers/url.js"

const router=Router();


router.post("/",creteShortId);
router.get("/:id",getOriginalUrl);
router.get("/",getAllUserUrl);
router.get("/analytics/:id",analytics);



export default router;