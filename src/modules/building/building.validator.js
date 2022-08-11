const joi =require("joi");
module.exports.addbuildings = async(req,res,next)=>{
try{
    const schema = joi.object({
        name: joi.string().required(),
        societyId: joi.number().required()
    })
    const result = await schema.validate(req.body);
    console.log(result);
    if(result.error){
        res.send(result.error);
    }else{
        next()
        }
}catch(err){
    console.log("addbuilding validator",err);
    res.send(err);
}
}
module.exports.updateBuildings =async (req,res, next)=>{
  try{
        const schema = joi.object({
            name: joi.string().required(),
            societyId: joi.number().required()
        })
        const result = await schema.validate(req.body);
        console.log(result);
        if(result.error){
            res.send(result.error);
        }else{
            next()
            }
       
    }catch(err){
        
        res.send("update building validtor",err);
        res.send(err);
    }
}
module.exports.deleteBuilding = async(req,res, next)=>{
   
    try{
       
        const schema = joi.object({
            name: joi.string().required(),
            societyId: joi.number().required()
        })
        const result = await schema.validate(res.body);
        console.log(result);
        if(result.error){
            res.send(result.error);
        }else{
            next()
            }

    }catch(err){
        
        res.send("delete building validtor",err);
        res.send(err);
    }
}
module.exports.searchBuilding= async(req,res,next)=>{
    try{

        const schema = joi.object({
            name: joi.string().optional(),
            societyId: joi.number().optional(),
            address: joi.string().optional()
        })
        const result = await schema.validate(req.body);
        console.log(result)
        if(result.error)
        {
            res.send(result.error)
        }
        else{
            next();
        }
    }
    catch(err)
    {
        console.log("search building validator",err)
        res.send(err)
    }
}