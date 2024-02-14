const mongoose=require("mongoose")

const securitySchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        address:String,
        phno:String,
        emailid:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    }
)



module.exports=mongoose.model("security",securitySchema)