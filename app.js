const exp = require("express")
const app = exp();
const buildingRouter = require("./src/modules/building/building.router")
const flatRouter = require("./src/modules/flat/flat.router")
const memberRouter = require("./src/modules/member/member.router")
//const auth = require("./auth");
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const mongoose = require("mongoose");
require('dotenv').config()
require('./db');
// console.log("****",process.env.DB_URL)
app.use('/building',buildingRouter);
app.use('/flat',flatRouter);
app.use('/member',memberRouter);



app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})

