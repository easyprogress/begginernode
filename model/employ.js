const mongoose=require('mongoose')
let userSchema=new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:string,
    email:string,
    address:string,
    password:string

})
module.exports=mongoose('employ',userSchema)