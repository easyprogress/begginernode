/// it is middleware

const express=require('express')
const middlew=express();
var bodyparser=require('body-parser')
var encoded=bodyparser.urlencoded();
middlew.set('views engine','ejs')
const checkurl=function(req,res,next)
{
    console.log("current router is",req.url)
    next();
}
middlew.use(checkurl);
middlew.get('/',function(req,res){
    res.send(" hello from node");
})

middlew.get('/about',encoded,function(req,res){
    //console.log(req.query)
    console.log(req.body)
    res.render('about.ejs')
})
middlew.get('/home',function(req,res){
    res.render('home.ejs')
})



middlew.get('/profil/:name',function(req,res){
    console.log(req.params.name)
    data={email:'test2gmail.com',address:'hyderbad',skills:['nodejs','javascript','cpp','java']}
    res.render('neha.ejs',{name:req.params.name,data:data})
})
// middlew.get('/about',function(req,res){
//     res.send(" hello from about")
// })
middlew.listen(4500)


/// it is not show me the current url
/// its is a middleware



