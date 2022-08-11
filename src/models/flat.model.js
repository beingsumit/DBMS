const { number, string } = require("joi");
const mongoose = require("mongoose")
const flatmodel = mongoose.model(
    'flat',
 new mongoose.Schema({ 
    flatNo:{
    type:Number,
    required:true
  } ,
   buildingName:{
    type:String,
    required:true
  },
  societyId:{
    type:Number,
    required:false
  } 
  },{ collection:'flat'}
  ));
   module.exports = flatmodel;