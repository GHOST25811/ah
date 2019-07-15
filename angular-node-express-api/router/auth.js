const express = require("express");
const router = express.Router();
const ex=require('../modules/qu');
const auth = require("../modules/qu");
console.log("off");

router.get("/author", (req, res, next) => {
	
  ex.getinfo(-1, (err, result) => {
	res.setHeader("Content-Type","application/json");
	res.send(result);
	});
});
module.exports = router;
