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
    ).then((res)=>{callback.success(),(error)=>{
        console.log(error,"errorinEmail")
        callback.failure()}})
}
export default sendEmail