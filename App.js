const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {blogsmodel}=require("./models/blog")
const bcrypt=require("bcryptjs") 


const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://suhan:suhan2109@cluster0.iuizdnx.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0")
app.post("/signup",async(req,resp)=>{
    let input=req.body
    let hashedpassword=await generateHashedpassword(input.password)
    console.log(hashedpassword)
    input.password=hashedpassword
    let blog=new blogsmodel(input)
    blog.save()
 resp.json({status:"success"})
}

)
const generateHashedpassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)

}

app.listen(8080,()=>{
    console.log("serverstarted")
})