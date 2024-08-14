const Staff=require("../models/Staff")

const createStaff=async(req,res)=>{
    try{
        const {name,email,password,Role,classroomId}=req.body
        const staff=new Staff({
            name,email,password,Role,classroomId
        })
        await staff.save()
        res.status(201).json(staff)
    }catch(error){
        console.log("1error")
        res.status(500).json({message:"server error"})
    }
}

const getStaff=async(req,res)=>{
    try{
        
        const staffs=await Staff.find()
        res.status(200).json(staffs)
    }catch(error){
        console.log("1error")
        res.status(500).json({message:"server error"})
    }
}

module.exports={createStaff,getStaff}