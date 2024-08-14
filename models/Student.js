const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema({  //student
    name:{
        type:String,required:true,
    },email:{
        type:String,required:true,
    },password:{
        type:String,default:true,
    },Role:{
        type:String,required:true
    },classroomId:{
        type:Number,required:true
    }
})

module.exports=mongoose.model('Student',studentSchema)