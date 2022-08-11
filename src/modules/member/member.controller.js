const memberModel = require("./../../models/members.model")
const joi = require("joi");
const jwt = require("jsonwebtoken")

module.exports.getmember = async (req, res) => {
    let data = await memberModel.find({});
    res.send(data)
}
module.exports.loginmember = async (req, res) => {

    try {

        let data = await memberModel.find({ userName: req.body.userName, password: req.body.password });
        if (data.length > 0) {
            let token = jwt.sign(JSON.stringify(data), process.env.SECRET_KEY)
            console.log("***", token);
            console.log("Found Following records");
            res.send(token);
        } else {
            res.send("invalid user");
        }
    } catch (err) {
        console.log(err.error);
        res.send("Something went wrong")
    }
}
module.exports.verifyToken = async (req, res, next) => {
    try {
        console.log(req.headers.token, "$$$$")
        var decoded = jwt.verify(req.headers.token, process.env.SECRET_KEY);
        console.log("decoded")
        next()
    }
    catch (err) {
        console.log(err.errors);
        res.send("Invalid token")
    }
}
module.exports.addmember = async (req, res) => {
    try {
        console.log("***", req.body)
        let data = await memberModel.insertMany(req.body);
        console.log("data", data)
        res.send(data)
    } catch (err) {
        console.log(err);
        res.send("something went wrong")
    }
}
module.exports.updatemember = async (req, res) => {
    console.log("My Building controller")
    res.send("This is PUT dummy response for member");
    try {

        let data = await memberModel.insertMany(req.body);
        res.send(data)
    } catch (err) {
        console.log(err.error);
        res.send("Something went wrong")
    }
}
module.exports.deletemember = async (req, res) => {
    console.log("My building controller");
    res.send("This is DELETE dummy response for member");
    try {

        let data = await memberModel.insertMany(req.body);
        res.send(data)
    } catch (err) {
        console.log(err.error);
        res.send("Something went wrong")
    }
}
module.exports.searchmember = async(req,res)=>{
    try{
        let obj = {};
        if(req.body.MemberName){
            obj.MemberName=req.body=req.body.MemberName
        }
        let data = await memberModel.find(obj);
        console.log(data);
        res.send(data);
    }
    catch(err)
    {
        res.send("something wrong")
    }
}