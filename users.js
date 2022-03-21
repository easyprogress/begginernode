// const mongoose=require('mongoose')
// let userSchema=new mongoose.Schema({
//     _id:mongoose.Schema.Types.ObjectId(),
//     name:String
// })
// module.exports=mongoose.model('users',userSchema);
// this is a model we define to use for get the data from mongodb 
 //this model for get the data
/*const mongoose=require('mongoose')
let userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    address:String

})
module.exports=mongoose.model('users',userSchema);*/

// this is also same model we making for insert the data in mogodb

const mongoose=require('mongoose')
let userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    address:String

})
module.exports=mongoose.model('users',userSchema);