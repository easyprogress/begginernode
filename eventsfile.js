// event file 

const fs=require('fs');
var rs=fs.createReadStream('./demo.text');
rs.on('open',function(){
    console.log("demo file is open")
})
