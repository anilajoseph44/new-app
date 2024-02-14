const express=require("express")

const securityModel=require("../models/securityModel")
const bcrypt=require("bcryptjs")
const { default: mongoose } = require("mongoose")


const router=express.Router()
hashpasswordgenerator=async(password)=>{
    
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

router.post("/securityadd",async(req,res)=>{
    let{data}={"data":req.body}
    let password=data.password
    hashpasswordgenerator(password).then(
        (hashedpassword)=>{
            console.log(hashedpassword)
            data.password=hashedpassword
            console.log(data)
            let security=new securityModel(data)
            let result=security.save()
            res.json(
                {
                    status:"success"
                }
            )
        }
    )
})

module.exports=router