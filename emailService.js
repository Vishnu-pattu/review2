const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
user:"yourgmail@gmail.com",
pass:"your_app_password"
}
})

function sendEmail(email,name,water,time){

const mail={

from:"yourgmail@gmail.com",
to:email,

subject:"Smart Irrigation Schedule",

text:`Hello ${name}

Water required today : ${water} Liters

Best irrigation time : ${time}

Smart Irrigation System`

}

transporter.sendMail(mail,(err)=>{
if(err) console.log(err)
else console.log("Email Sent")
})

}

module.exports=sendEmail