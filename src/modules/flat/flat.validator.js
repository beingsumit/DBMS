const joi =require("joi");
module.exports.addflat = async (req,res,next)=>{
    
    try{
        
        const schema = joi.object({
            flatNo: joi.number().required(),
            buildingName: joi.string().required(),
            societyId: joi.number().optional()
        })
        const result = await schema.validate(req.body);
        console.log(result);
        if(result.error){
            res.send(result.error);
        }else{
            next()
            }
    }catch(err){
        console.log("add validator",err);
        res.send(err);
    }
    }
 

module.exports.updateflat = async(req,res,next)=>{
 
    try{
        
        const schema = joi.object({
            flatNo: joi.string().required(),
            buildingName: joi.string().required(),
            societyId: joi.number().optional()
        })
        const result = await schema.validate(req.body);
        console.log(result);
        if(result.error){
            res.send(result.error);
        }else{
            next()
            }

    }catch(err){
        
        res.send("updateflat validator",err);
        res.send(err);
    }
}
module.exports.deleteflat = async(req,res, next)=>{
    
    try{
        
        const schema = joi.object({
            flatNo: joi.string().required(),
            buildingName: joi.string().required(),
            societyId: joi.number().optional()
        })
        const result = await schema.validate(req.body);
        console.log(result);
        if(result.error){
            res.send(result.error);
        }else{
            next()
            }

       
    }catch(err){
        
        res.send("delete flat validator",err);
        res.send(err);
    }
}
module.exports.searchflat= async(req,res,next)=>{
    try{

        const schema = joi.object({
            flatNo: joi.number().optional(),
            buildingName: joi.string().optional(),
            societyId: joi.number().optional()
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
        console.log("search flat validator",err)
        res.send(err)
    }
}