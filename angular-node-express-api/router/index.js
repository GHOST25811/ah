const express = require("express");
const router=express.Router();
const ex=require('../modules/qu');
router.get('/',(req,res,next)=>{
    console.log('AHMAD');
    ex.getinfo(1, (err, result) => {
		res.setHeader("Content-Type", "application/json");
		res.send(result);
	});
  
});
router.get("/first",(req,res,next)=>{
    console.log('AHMAD');
    ex.getinfo(-1, (err, result) => {
		
		res.setHeader("Content-Type", "application/json");
		res.send(result);
	});
      
    });
module.exports = router;
