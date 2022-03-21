 // it is a file that we send the mail from it is a mail perogram
// then go to myaccount.google.com/lesssecureapps
var nodeMailer=require('nodemailer')
var transport=nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'neha.gupta@emagia.com',
        pass:'Ne@em@g89'
    }
})
var mailOptions={
    from:'neha.gupta@emagia.com',
    to:'neha.gupta@emagia.com',
    subject:'test node mail',
    text:'hello from node js'
}

transport.sendMail(mailOptions,function(error,info){
    if(error)
    {
        console.warn(error)
    }
    else{
        console.warn(" it is succesful",info.response)
    }
})