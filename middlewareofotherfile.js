module.exports=function(req,res,next)
{
    console.log("current router is",req.url)
    next();
}