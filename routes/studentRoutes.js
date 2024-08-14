
const express=require("express")

const router=express.Router()

const studentController=require("../controllers/studentController")

const Student=require("../models/Student")

router.post('/add-student',studentController.createStudent)
router.get('/get-students',studentController.getStudents)

module.exports=router