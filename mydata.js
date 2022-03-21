// TO CONNECT WITH MYSQL
var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'neha'
})
con.connect(function(error){
    if(error) throw error;
    con.query("select * from emagia",function(error,result){
        if(error) throw error;
        console.warn(" all your result",result)
    })
})
