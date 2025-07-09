import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './webabout.scss'
import AboutIcon from '../../assets/svg/aboutme.svg'
import sendEmail from '../../utils/email_function'
import Modal from '../Modal/modal'

const WebContact = () => {
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
  
  return (
 <div style={{backgroundColor:'#ccc',width:"100vw",height:"100vh",position:"relative",justifyContent:"center",alignItems:"center",display:"flex"}}>
    {/* <div style={{backgroundColor:'#ccc',width:"100vw",height:"100vh",alignContent:"center",justifyContent:"center",display:"flex",top:"50%",border:"10px solid red",}}> */}
  
      <div className='inputContainer' >
        <div className='heading1'>
          <h3 className='headingText'>
            CONTACT
          </h3>

        </div>
        <div className='bodytextContainer'>
          <h4 className='bodytext'>
            I'm currently open to new opportunities and always excited to take on meaningful work. If you're hiring or looking to collaborate, feel free to reach out. I'd be happy to connect and discuss how I can contribute to your team.
          </h4>

        </div>
        <div style={{display:"flex",width:150}}>
           <img src={AboutIcon}/>
        </div>
        <div className='inputFields'>
          <div className='containsErrorMessage'>
            <input type='text' className='inputBox' placeholder='Enter Your Name' required value={name} onChange={(e)=>setName(e.target.value)} onFocus={()=>setNameError("")}/>
            {nameError && <p className='errorMessage'>{nameError}</p>}
          </div>
            <div>
            <input type='text' className='inputBox' placeholder='Enter Your Email' required value={email} onChange={(e)=>setEmail(e.target.value)} onFocus={()=>setEmailError("")}/>
            {emailError && <p className='errorMessage'>{emailError}</p>}
            </div>
            <div className='containsErrorMessage'>
            <input type='text' className='inputBox' placeholder='Phone Number' required value={phoneNumber}  onChange={(e)=>handlePhoneNumber(e)} onFocus={()=>setPhoneNumberError("")}/>
            {phoneNumberError && <p className='errorMessage'>{phoneNumberError}</p>}
            </div>
           <textarea className='inputTextBox' placeholder='Message' required value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
             <div className='submit' onClick={handleSubmit}>
            <p className='submitButton'>
              SUBMIT
            </p>
        </div>
        </div>
        <Modal showSuccessStatus={showSuccessModal} showFailureStatus={showFailureModal} setShowSuccessModal={setShowSuccessModal} setShowFailureModal={setShowFailureModal} isLoading={isLoading} timeOutError={timeOutError}/>
 {/* <input type='textarea' className='inputTextBox' placeholder='Feed Back' required/> */}
      <div style={{height:"40px"}}>
      
      </div>
      </div>
   
    </div>
  )
}

export default WebContact