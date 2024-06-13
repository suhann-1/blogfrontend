const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "name":String,
    "email":String,
    "password":String
})
let blogsmodel=mongoose.model("blogs",schema)
module.exports={blogsmodel}