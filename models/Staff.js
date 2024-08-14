const mongoose=require("mongoose")

const staffSchema=new mongoose.Schema({  //employee
    name:{
        type:String,required:true,
    },email:{
        type:String,required:true,
    },password:{
        type:String,default:true,
    },Role:{
        type:String,required:true
    },classroomId:{
        type:Number,default:false
    }
})

module.exports=mongoose.model('Staff',staffSchema)