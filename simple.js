//nKiDn8BpJDt7SDZp
const express=require('express')
const simple=express()
const mongoose=require('mongoose')
const user=('./model/employ.js')
const bodyparser=require("body-parser")
var jsonparser=bodyparser.json()
const { createCipheriv } = require('crypto')
var crypto =require('crypto');
var key="password";
var algo="ase256";
mongoose.connect('mongodb+srv://charming:nKiDn8BpJDt7SDZp@cluster0.uhh8s.mongodb.net/charm?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true  
}
).then(()=>{
    console.log("connected")
})


// in this ciper  crypto is error
simple.post('/registration',jsonparser,function(req,res){
var  cipher=crypto.createHmac(algo,key);
const encrypted=cipher.update(req.body.password,'utf8')
+cipher.digest();
console.log(req.body)
res.send("hello")
})

simple.listen(9000)
