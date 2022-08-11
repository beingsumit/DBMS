const flatModel = require("./../../models/flat.model")
const joi =require("joi");
module.exports.getflat = async(req,res)=>{
   let data = await flatModel.find({});
   res.send(data)
}

module.exports.addflat = async (req,res)=>{
    //console.log("My Building controller")
    try{
       
        let data = await flatModel.insertMany(req.body);
        res.send(data)
    }catch(err){
        console.log(err.error);
        res.send("Something went wrong")
    }
 
}

module.exports.updateflat = async(req,res)=>{
    console.log("My flat controller")
    res.send("This is PUT dummy response for building");
    try{
       
        let data = await flatModel.insertMany(req.body);
        res.send(data)
    }catch(err){
        console.log(err.error);
        res.send("Something went wrong")
    }
}
module.exports.deleteflat = async(req,res)=>{
    console.log("My flat controller");
    res.send("This is DELETE dummy response for building");
    try{
        
        let data = await flatModel.insertMany(req.body);
        res.send(data)
    }catch(err){
        console.log(err.error);
        res.send("Something went wrong")
    }
}
module.exports.searchflat = async(req,res)=>{
    try{
        let obj ={};
        if(req.body.flatNo){
            obj.flatNo=req.body=req.body.flatNo
        }
        let data = await flatModel.find(obj);
        console.log(data);
        res.send(data);
    }
    catch(err)
    {
        res.send("something wrong")
    }
}