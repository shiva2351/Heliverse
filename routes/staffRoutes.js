
const express=require("express")

const router=express.Router()

const staffController=require("../controllers/staffController")

const Staff=require("../models/Staff")

router.post('/add-staff',staffController.createStaff)
router.get('/get-staff',staffController.getStaff)

module.exports=router