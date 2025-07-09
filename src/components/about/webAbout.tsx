import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './webabout.scss'
import AboutIcon from '../../assets/svg/aboutme.svg'
import TopIcon from '../../assets/svg/contactFooter/top.svg'
import mail from '../../assets/svg/mobile/email.svg'
import git from '../../assets/svg/mobile/gitHub.svg'
import linkedIn from '../../assets/svg/mobile/linkedIn.svg'
import whatsapp from '../../assets/svg/mobile/whatsapp.svg'
import download from '../../assets/svg/mobile/download.svg'
import instagram from '../../assets/svg/contactFooter/instagram.svg'
import sendEmail from '../../utils/email_function'
import Modal from '../Modal/modal'
import { IconType } from '../../utils/enum/iconType'
import userInfo from '../../userInfo/userInfo'

const WebContact = ({isWeb}) => {
  const navigate=useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [nameError,setNameError] = useState("")
  const [message,setMessage] = useState("")
  const [emailError,setEmailError]= useState("")
  const [phoneNumberError,setPhoneNumberError] = useState("")
  const [showSuccessModal,setShowSuccessModal] = useState(false)
  const [showFailureModal,setShowFailureModal] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const [timeOutError,setTimeOutError] = useState(false)
  const handlePhoneNumber=(e)=>{
    //*
    
    const value = e.target.value
   if (/^\+?\d*$/.test(value)) {
      setPhoneNumber(value);
      setPhoneNumberError("")
    }
    else setPhoneNumberError(" * Sorry! Only Number 0-9 are allowed *")
  }
  const validation=(name,email,phone)=>{
    //*
    let isValid=true;
    let isValidEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if(!isValidEmail){
        isValid=false;
        setEmailError("* Sorry! Enter Valid Email *")
    }

    if(phone.length<=3){
      isValid=false;
      setPhoneNumberError("* Hey! Enter Atleast 7 Number *")
    }
    if(name.length===0){
      isValid = false;
      setNameError("* Enter Your Name *")
    }

    return isValid

  }
  const emailSendSuccess=()=>{ 
    debugger
    setIsLoading(false)
    setTimeOutError(false)
    setShowSuccessModal(true)
    console.log("success")
  }
  const emailSendFailure=()=>{
    debugger
    setIsLoading(false)
    setShowFailureModal(true)
    setTimeOutError(false)
    console.log("failure")
  }
  const callback={
    success:emailSendSuccess,
    failure:emailSendFailure
  }

  const handleSubmit=()=>{
    //*
   
    
    
    if(validation(name,email,phoneNumber)){
      setIsLoading(true)
   
      const payload={
        name:name,
        email:email,
        phone:phoneNumber,
        time: new Date().toLocaleString(),
        message:message ? message : "Nothing",
        
      }
      
      sendEmail(payload,callback)
      // setTimeout(()=>{
      //   setTimeOutError(true)
      // },20000)
    }
  }
  const scrollRef = useRef(null)
  const handleScroll=()=>{
    if(isWeb){
      //@ts-ignore
      scrollRef.current.scrollIntoView({behaviour:"smooth"})
    }
    else {
      const id="About Me"
      const el=document.getElementById(id)
      if(el){
        el.scrollIntoView({behavior:"smooth"})
      }
    }
  }
  const _email={
    subject:encodeURIComponent('Contact from portfolio'),
    body:encodeURIComponent('Hai Ganesh, \n\n I Viewed Your Profile and ...')
  }
  const handleIconClick=(type)=>{
    debugger
      switch (type) {
          case IconType.MAIL:
            // window.open(`mailto:ganeshreignss@gmail.com`)
             window.location.href =`mailto:${userInfo?.userInfo?.userEmail}?Subject=${_email?.subject}&body=${_email?.body}`;
            break;
          case IconType.GIT:
            window.open(`https://github.com/${userInfo?.userInfo?.userGit}`, "_blank");
            break;
          case IconType.LINKEDIN:
            window.open(`https://www.linkedin.com/in/${userInfo?.userInfo?.userLinked}`, "_blank");
            break;
          case IconType.WHATSAPP:
            const message = "Hello Ganesh, I want to connect with you"
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://api.whatsapp.com/send?phone=918903835974&text=${encodedMessage}`, "_blank");
            break;
          case IconType.INSTAGRAM:
            window.open("https://www.instagram.com/_u/_gan21_", "_blank");
          default: break;
        }
  }
  
  return (
 <div ref={scrollRef} style={{backgroundColor:'#ccc',width:"100vw",height:"100vh",position:"relative",justifyContent:"center",alignItems:"center",display:"flex"}}>
    {/* <div style={{backgroundColor:'#ccc',width:"100vw",height:"100vh",alignContent:"center",justifyContent:"center",display:"flex",top:"50%",border:"10px solid red",}}> */}
  
      <div className='inputContainer' >
        <div className='heading1'>
          <h3 className='headingText'>
            CONTACT
          </h3>

        </div>
        <div className={isWeb ? 'bodytextContainer' : 'bodytextContainer2' }>
          <h4 className='bodytext'>
            I'm currently open to new opportunities and always excited to take on meaningful work. If you're hiring or looking to collaborate, feel free to reach out. I'd be happy to connect and discuss how I can contribute to your team.
          </h4>

        </div>
        <div style={{display:"flex",width:150}}>
           <img src={AboutIcon}/>
        </div>
        <div className='inputFields'>
          <div className='containsErrorMessage'>
            <input type='text' className={isWeb ? 'inputBox' : 'inputBox2'} placeholder='Enter Your Name' required value={name} onChange={(e)=>setName(e.target.value)} onFocus={()=>setNameError("")}/>
            {nameError && <p className='errorMessage'>{nameError}</p>}
          </div>
            <div>
            <input type='text' className={isWeb ? 'inputBox' : 'inputBox2'} placeholder='Enter Your Email' required value={email} onChange={(e)=>setEmail(e.target.value)} onFocus={()=>setEmailError("")}/>
            {emailError && <p className='errorMessage'>{emailError}</p>}
            </div>
            <div className='containsErrorMessage'>
            <input type='text' className={isWeb ? 'inputBox' : 'inputBox2'} placeholder='Phone Number' required value={phoneNumber}  onChange={(e)=>handlePhoneNumber(e)} onFocus={()=>setPhoneNumberError("")}/>
            {phoneNumberError && <p className='errorMessage'>{phoneNumberError}</p>}
            </div>
           <textarea className={isWeb ? 'inputTextBox' : 'inputTextBox2'}  placeholder='Message' required value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
             <div className='submit' onClick={handleSubmit}>
            <p className='submitButton'>
              SUBMIT
            </p>
        </div>
        </div>
        <Modal showSuccessStatus={showSuccessModal} showFailureStatus={showFailureModal} setShowSuccessModal={setShowSuccessModal} setShowFailureModal={setShowFailureModal} isLoading={isLoading} timeOutError={timeOutError}/>
 {/* <input type='textarea' className='inputTextBox' placeholder='Feed Back' required/> */}

 <div style={{backgroundColor:"black",width:"100%",height: isWeb ? "35vh" : "20vh",justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:12}}>
    <div style={{display:"flex",flexDirection:"column",gap:6,justifyContent:"center",alignItems:"center"}}>
      <img src={TopIcon} height={20} style={{cursor:"pointer"}} onClick={handleScroll} />
      <span  className='footerText'> BACK TO TOP</span>
    </div>
    <div style={{display:"flex",flexDirection:"row",gap:20,alignItems:"center"}}>
        <img src={mail} height={20}  style={{cursor:"pointer"}} onClick={()=>handleIconClick('email')}/>
        <img src={linkedIn} height={20}  style={{cursor:"pointer"}} onClick={()=>handleIconClick('linkedIn')}/>
        <img src={git} height={20}  style={{cursor:"pointer"}} onClick={()=>handleIconClick('git')}/>
        <img src={instagram} height={20}  style={{cursor:"pointer"}} onClick={()=>handleIconClick('instagram')}/>
        <img src={whatsapp} height={30}  style={{cursor:"pointer"}} onClick={()=>handleIconClick('whatsApp')}/>
        <a href='Ganesh S.pdf' download={'Resume_ganesh.pdf'} >
        <img src={download} height={25}  style={{cursor:"pointer"}}/>
        </a>
    </div>
    {/* <div style={{display:"flex",flexDirection:"row",gap:6}}>
      <span>@ 2025  </span>
    </div> */}
 </div>
      {/* <div style={{height:"40px"}}>
      
      </div> */}
      </div>
   
    </div>
  )
}

export default WebContact