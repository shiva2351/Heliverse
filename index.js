const express = require("express");
const dotEnv=require("dotenv")
var cors = require('cors')
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const staffRoutes=require("./routes/staffRoutes")
const studentRoutes=require("./routes/studentRoutes")

const app =express()
app.use(bodyParser.json())
<<<<<<< HEAD
app.use(cors())
app.get('/',(req,res)=>{
=======

app.get('/f',(req,res)=>{
>>>>>>> e0ada2d0220e47342c73c4665a14d75c808eb10b
  res.send('server is ready');
});
const PORT=process.env.PORT || 3000
dotEnv.config()
mongoose.connect(process.env.Mongo_url)
.then(()=>{
  console.log("succussfull")
})
.catch((error)=>{
  console.log("mongooseerror")
})

app.use("/staffs",staffRoutes)
app.use("/students",studentRoutes)
app.listen(PORT,()=>{
  console.log("server started and running at 5000")
 
})
