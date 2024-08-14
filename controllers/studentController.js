const Student=require("../models/Student")

const createStudent=async(req,res)=>{
    try{
        const {name,email,password,Role,classroomId}=req.body
        const student=new Student({
            name,email,password,Role,classroomId
        })
        await student.save()
        res.status(201).json(student)
    }catch(error){
        console.log("1error",error)
        res.status(500).json({message:"server1 error "})
    }
}

const getStudents=async(req,res)=>{
    try{
        
        const students =await Student.find()
        res.status(200).json(students)
    }catch(error){
        console.log("1error",error)
        res.status(500).json({message:"server1 error "})
    }
}

module.exports={createStudent,getStudents}