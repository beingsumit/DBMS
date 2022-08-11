const { number, string } = require("joi");
const mongoose = require("mongoose")
const membermodel = mongoose.model(
    'member',
 new mongoose.Schema({ 
    MemberName:{
    type:String,
    required:true
  } ,
   MobileNo:{
    type:Number,
    required:true
  },
  flatNo:{
    type:Number,
     required:false
  },
  userName:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  } 
  },{ collection:'member'}
  ));
   module.exports = membermodel;