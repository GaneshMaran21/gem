import React from 'react'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {
   const navigate=useNavigate()
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:8,height:"100%"}}  >
       <div style={{padding:"0px 16px ",color:"#000",backgroundColor:"#fff",borderRadius:16}} onClick={()=>navigate(-1)}>
      <h5>
        Go Back
      </h5>
    </div>
      <p style={{color:"#fff"}}>
          Hope ! Connect You soon
      </p>
   
    </div>
  )
}

export default Portfolio