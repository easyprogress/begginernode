/// it is middleware with router 

const express=require('express')
const middlew=express();
const router=express.Router();
const checkurl=require('./middlewareofotherfile');

middlew.get('/',function(req,res){
    res.send(" hello from node");
})

middlew.get('/show',checkurl,function(req,res){
    res.send(" hello from show");
})



middlew.get('/about', checkurl,function(req,res){
    res.send(" hello from about")
})
middlew.use('/about',router);
middlew.listen(4500)


/// it is not show me the current url
/// its is a middleware



