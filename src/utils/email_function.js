import emailjs from "@emailjs/browser";
import configEmail from "../userInfo/userInfo";


function sendEmail (payload,callback) {
    debugger
    //*
    emailjs.send(
        configEmail?.configEmail?.serviceKey,
        configEmail?.configEmail?.template,
        payload,
        configEmail?.configEmail?.publicKey,
    ).then((res)=>{callback.success()}).catch((error)=>
    {
         console.log(error,"Failure")
        callback.failure()
    }
    )
}
export default sendEmail