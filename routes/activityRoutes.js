const express=require("express");
const router=express.Router();

router.post("/", createActivityController);

module.exports=router;