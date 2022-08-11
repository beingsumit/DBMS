const buildingModel = require("./../../models/building.model")
const joi =require("joi");
const buildingmodel = require("./../../models/building.model");

module.exports.getBuildings = async(req,res)=>{
   let data = await buildingModel.find({});
   res.send(data)
}

module.exports.addBuildings = async(req,res)=>{
    //console.log("My Building controller")
    try{
        let data = await buildingModel.insertMany(req.body);
        res.send(data)
    }catch(err){
        console.log(err.error);
        res.send("Something went wrong")
    }
   
}

module.exports.updateBuildings =async (req,res)=>{
    console.log("My Building controller")
    res.send("This is PUT dummy response for building");
    try{
        
        let data = await buildingModel.insertMany(req.body);
        res.send(data)
    }catch(err){
        console.log(err.error);
        res.send("Something went wrong")
    }
}

module.exports.deleteBuilding = async(req,res)=>{
    console.log("My building controller");
    res.send("This is DELETE dummy response for building");
    try{
      
        let data = await buildingModel.deleteOne(req.body);
        res.send(data)
    }catch(err){
        console.log(err.error);
        res.send("Something went wrong")
    }
}

module.exports.searchBuilding = async(req,res)=>{
    try{
        let obj ={};
        if(req.body.name){
            obj.name=req.body=req.body.name
        }
        let data = await buildingmodel.find(obj);
        console.log(data);
        res.send(data);
    }
    catch(err)
    {
        res.send("something wrong")
    }
}