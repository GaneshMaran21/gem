import React from 'react'
import { useNavigate } from 'react-router-dom'
import './webabout.scss'

const WebContact = () => {
  const navigate=useNavigate()
  return (
    <div style={{backgroundColor:'#ccc',width:"100vw",height:"100vh",alignContent:"center",justifyContent:"center",display:"flex",top:"50%"}}>
      <div className='inputContainer'>
            <input type='text' className='inputBox' placeholder='Enter Your Name' required/>
            <input type='text' className='inputBox' placeholder='Enter Your Email' required/>
            <input type='text' className='inputBox' placeholder='Phone Number' required/>
            <input type='textarea' className='inputTextBox' placeholder='Phone Number' required/>
      </div>

   
    </div>
  )
}

export default WebContact