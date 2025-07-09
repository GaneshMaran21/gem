import React from 'react'
import '../about/webabout.scss'
import TickGif from '../../assets/gif/Animation .gif'
import WrongGif from '../../assets/gif/AnimationClose.gif'
import LoadingGif from '../../assets/gif/AnimationLoading1.gif'
import Close from '../../assets/svg/closeRed.svg'
import { useNavigate } from 'react-router-dom'
const Modal = (props) => {
    const {showSuccessStatus,showFailureStatus,setShowSuccessModal=()=>{},setShowFailureModal=()=>{},isLoading,timeOutError,setTimeOutError=()=>{}} = props;
    const navigate=useNavigate()
    const handleClick=(type)=>{
      if(type==="success"){
        setShowSuccessModal(false)
        navigate('/about')
      }
      else if(type==='failure'){
        setShowFailureModal(false)
        
      }
      else if(type==="timeOut"){
        setTimeOutError(false)
      }
    }
  return (
   <>{showSuccessStatus && 
    <div className='modal-overlay'>
           <div className='modal' onClick={(e)=>e.stopPropagation()}>
          <div className='modalContainer'>
              <div style={{position:"absolute",right:0,top:0,padding:12,cursor:'pointer'}} onClick={()=>handleClick("success")}>
            <img src={Close} height={30}  />
              </div>
              <p className='modalText'>
                Thanks for sharing Your Interest !
              </p>
             <img src={TickGif} height={100}/>
              <p className='modalColorText'>
                Your Message is Successfully Send
              </p>           
          
          </div>
        </div>
        </div>
        }
        {showFailureStatus && 
          <div className='modal-overlay'>
       <div className='modal'>
          <div className='modalContainer'>
             <div style={{position:"absolute",right:0,top:0,padding:12 ,cursor:"pointer"}} onClick={()=>handleClick("failure")}>
            <img src={Close} height={30}  />
              </div>
              <p className='modalWrongText'>
                Sorry! Something Went Wrong
              </p>
             <img src={WrongGif} height={100}/>
              <p className='modalTryAgainText' onClick={()=>handleClick("failure")}>
                Please Try Again
              </p>           
          
          </div>
        </div> 
        </div>
        }
     {isLoading &&  
      <div className='modal-overlay'>
       <div className='modal'>
          <div className='modalContainer'>
               <img src={LoadingGif}  height={80} />          
          </div>
        </div> 
        </div>
    }
     {/* {timeOutError &&  
      <div className='modal-overlay'>
       <div className='modal'>
          <div className='modalContainer'>
             <div style={{position:"absolute",right:0,top:0,padding:12 ,cursor:"pointer"}} onClick={()=>handleClick("timeOut")}>
            <img src={Close} height={30}  />
              </div>
              <p className='modalWrongText'>
               Sorry! Session Timed Out
              </p>
             <img src={WrongGif} height={100}/>
              <p className='modalTryAgainText' onClick={()=>handleClick("timeOut")}>
                Please Try Again
              </p>           
          
          </div>
        </div> 
        </div>
    } */}
   </>
  )
}

export default Modal