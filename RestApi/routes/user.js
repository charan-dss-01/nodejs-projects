import express from "express"
import { Router } from "express"
import {getAllUser,getUserById,createUser,updateUser,deleteUser} from "../controllers/user.js"

const router=Router();



router.get("/",getAllUser)
router.get("/:id",getUserById)
router.post("/",createUser)
router.patch("/:id",updateUser)
router.delete("/user/:id",deleteUser);


export default router;