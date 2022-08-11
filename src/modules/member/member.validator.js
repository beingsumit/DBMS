const joi = require("joi");

module.exports.loginmember = async (req, res, next) => {
try {


        const result = await schema.validate(req.body);
        const jwt = require("jsonwebtoken");
        let token = jwt.sign({ test: "test" }, "mykey")
        console.log("***", token);

        console.log(result);
        if (result.error) {
            res.send(result.error);
        } else {
            next()
        }
    } catch (err) {

        res.send("loginmember validator", err);
        res.send(err);
    }
}
module.exports.addmember = async (req, res, next) => {
    try {

        const schema = joi.object({
            MemberName: joi.string().required(),
            MobileNo: joi.number().required(),
            flatNo: joi.number().optional(),
            userName: joi.string().required(),
            password: joi.string().required()
        })
        const result = await schema.validate(req.body);
        console.log(result);
        if (result.error) {
            res.send(result.error);
        } else {
            next()
        }
    } catch (err) {

        res.send("addmember validator", err);
        res.send(err);
    }
}
module.exports.updatemember = async (req, res, next) => {

    try {

        const schema = joi.object({
            MemberName: joi.string().required(),
            MobileNo: joi.number().required(),
            flatNo: joi.number().optional()
        })
        const result = await schema.validate(req.body);
        console.log(result);

        if (result.error) {
            res.send(result.error);
        } else {
            next()
        }

    } catch (err) {

        res.send("updatemember validator", err);
        res.send(err);
    }
}
module.exports.deletemember = async (req, res, next) => {

    try {

        const schema = joi.object({
            MemberName: joi.string().optional(),
            MobileNo: joi.number().optional(),
            flatNo: joi.number().optional()
        })
        const result = await schema.validate(req.body);
        console.log(result);
        if (result.error) {
            res.send(result.error);
        } else {
            next()
        }


    } catch (err) {

        res.send("delete member validator", err);
        res.send(err);
    }
}
module.exports.searchmember= async(req,res,next)=>{
    try{

        const schema = joi.object({
            MemberName: joi.string().optional(),
            MobileNo: joi.number().optional(),
            flatNo: joi.number().optional()
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
        console.log("search member validator",err)
        res.send(err)
    }
}