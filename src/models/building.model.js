const mongoose = require("mongoose")
const buildingmodel = mongoose.model(
    'building',
 new mongoose.Schema({ 
    name:{
    type:String,
    required:true
  } ,
   societyId:{
    type:Number,
    required:true
  },
  address:{
    type:String
   , required:false
  } 
  },{ collection:'building'}
  ));
   module.exports = buildingmodel;