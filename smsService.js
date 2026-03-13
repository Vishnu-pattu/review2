const twilio = require("twilio")

const client = twilio(
"ACCOUNT_SID",
"AUTH_TOKEN"
)

function sendSMS(phone,name,water,time){

client.messages.create({

body:`Hello ${name}
Water Required : ${water} L
Time : ${time}`,

from:"+1234567890",
to:"+91"+phone

})

.then(()=>console.log("SMS Sent"))
.catch(err=>console.log(err))

}

module.exports=sendSMS