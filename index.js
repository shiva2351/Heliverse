const express = require("express");
const dotEnv=require("dotenv")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const staffRoutes=require("./routes/staffRoutes")
const studentRoutes=require("./routes/studentRoutes")

const app =express()
app.use(bodyParser.json())

app.get('/',(req,res)=>{
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
