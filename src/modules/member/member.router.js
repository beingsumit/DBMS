const express = require("express");
const router = express.Router();
const memberController = require("./member.controller")
const membervalidator = require("./member.validator")

router.get('/list',memberController.verifyToken,memberController.getmember);
 
router.post('/add',memberController.verifyToken ,membervalidator.addmember,memberController.addmember);

router.put('/update',memberController.verifyToken ,memberController.verifyToken,membervalidator.updatemember,memberController.updatemember);

router.post("/login",memberController.loginmember);

router.delete('/remove',memberController.verifyToken,membervalidator.deletemember,memberController.deletemember);

router.post('/search',memberController.verifyToken,membervalidator.searchmember,memberController.searchmember);

module.exports =router;