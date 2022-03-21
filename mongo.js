// it is used to connect  from the database

const express=require('express')
const mongo=express();
const mongoose=require('mongoose')
const User=require('./users')
var bodyParser=require('body-parser')
var jsonParser=bodyParser.json();
mongoose.connect('mongodb+srv://averager:PmNGABN6N0HvqowP@cluster0.uhh8s.mongodb.net/tutorial?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true  
})
mongo.get('/mongo',function(req,res){
    User.find().select('name').then((data)=>{
        res.status(200).json(data)
    })
})

mongo.post('/users', jsonParser,function(req,res){
    //res.end(req.body.name) == iss s boody mmil thi h
    //res.end("hello from node mongodb is here")
    const data=new User({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        email:req.body.email

    })
    data.save().then((result)=>{
        res.status(201).json(result)
    })
    .catch((error)=>console.log(error))
})

mongo.delete('/user/:id',function(req,res){
    User.deleteOne({_id
        :req.params.id})
    .then((result)=>{
        res.status(200).json(result)
    }).catch((error)=>{console.log(error)})
}   )


mongo.put('/user/:id',jsonParser,function(req,res){
    User.updateOne({_id:req.params.id},{$set:{name:req.body.name}}
        ).then((result)=>{
            res.status(201).json(result)
        }).catch((error)=>{console.log(error)})
           
        
})

// foor searching api
mongo.get('/user/:name',function(req,res){
    var regex=new RegExp(req.params.name,'i')
    User.find({name:regex}).then((result)=>{
        res.status(201).json(result)
    })
})


mongo.listen(5000)

//to get data
/*User.find({},function(err,users){
    if(err)
    console.warn(err);
    console.warn(users)

})*/
// is used to  connected  from database
//.then(()=>{console.warn(" database is connected")})

/// this wemake for insert data in mongodb
/*const data=new User({
    _id:new mongoose.Types.ObjectId(),
    name:'tony starck',
    address:"starck tower"
})
data.save().then((resut)=>{
    console.warn(result)
})
.catch(err=>console.warn(err))*/