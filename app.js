const  express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const securityrouting=require("./controllers/securityRouter")


const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://anilasandrajose01:sandrajoseph99@cluster0.vpgykyq.mongodb.net/newsecurityDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/security",securityrouting)

app.listen(3001,()=>{
    console.log("sevrer running")
})