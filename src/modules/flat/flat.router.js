const express = require("express");
const router = express.Router();
const flatController = require("./flat.controller")
const flatvalidator = require("./flat.validator")
const membercontroller = require("./../member/member.controller")

router.get('/list',membercontroller.verifyToken ,flatController.getflat);
 

router.post('/add',membercontroller.verifyToken ,flatvalidator.addflat,flatController.addflat);

router.put('/update',membercontroller.verifyToken ,flatvalidator.updateflat,flatController.updateflat);

router.delete('/remove',membercontroller.verifyToken ,flatvalidator.deleteflat,flatController.deleteflat);

router.post('/search',membercontroller.verifyToken,flatvalidator.searchflat,flatController.searchflat);

module.exports= router;