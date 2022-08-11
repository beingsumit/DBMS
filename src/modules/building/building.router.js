const express = require("express");
const router = express.Router();
const buildingController = require("./building.controller")
const buildingvalidator = require("./building.validator")
const membercontroller = require("./../member/member.controller")
router.get('/list',membercontroller.verifyToken,buildingController.getBuildings)


router.post('/add',membercontroller.verifyToken ,buildingvalidator.addbuildings,buildingController.addBuildings);

 router.put('/update',membercontroller.verifyToken,buildingvalidator.updateBuildings,buildingController.updateBuildings);

 router.delete('/remove',membercontroller.verifyToken,buildingvalidator.deleteBuilding,buildingController.deleteBuilding);
 
 router.post('/search',membercontroller.verifyToken,buildingvalidator.searchBuilding,buildingController.searchBuilding);

module.exports= router;