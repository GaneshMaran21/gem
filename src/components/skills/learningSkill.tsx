import React from 'react'
import nest from '../../assets/svg/Nest.js.svg';
import sql from '../../assets/svg/sql.svg';

const Learning = () => {
  return (
   <>
   <div className='using'>
           <span className='usingText'>
             Learning Now
           </span>
           <div className='usingIcon'>
             <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
             <img src={nest} alt="" height={50} width={50}/>
             <p className='usingIconText'>Nest JS</p>
             </div>
             <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
             <img src={sql} alt="" height={50} width={50} />
             <p className='usingIconText'>sql</p>
             </div>
             {/* <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
            <img src={mantine} alt="" height={50} width={50} />
             <p className='usingIconText'>MANTINE</p>
             </div>
             <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
             <img src={bootstrap} alt="" height={50} width={50} />
             <p className='usingIconText'>BOOTSTRAP</p>
             </div>
             <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
             <img src={js} alt="" height={50} width={50} />
             <p className='usingIconText'>Java script</p>
             </div>
             <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
             <img src={tsx} alt="" height={50} width={50} />
             <p className='usingIconText'>type script</p>
             </div>
             <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
            <img src={react} alt="" height={50} width={50} />
             <p className='usingIconText'>react.js</p>
             </div>
             <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
              <img src={rn2} alt="" height={50} width={50} />
             <p className='usingIconText'>React Native</p>
             </div>
             <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
             <img src={node} alt="" height={50} width={50} />
             <p className='usingIconText'>node js</p>
             </div>
             */}
   
           </div>
         </div>
   </>
  )
}

export default Learning