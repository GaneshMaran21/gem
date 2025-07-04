import React from 'react'
import './skills.scss'
import Html from '../../assets/svg/html.svg';
import css from '../../assets/svg/css.svg';
import mantine from '../../assets/svg/mantine.svg';
import bootstrap from '../../assets/svg/bootstrap.svg';
import js from '../../assets/svg/js.svg';
import tsx from '../../assets/svg/typeScript.svg';
import node from '../../assets/svg/node.svg';
import react from '../../assets/svg/react.svg';
import rn2 from '../../assets/svg/rn2.svg';
import figma from '../../assets/svg/figma.svg';


const ExpereiceSkill = () => {
  return (
    <>
      <div className='using'>
            <span className='usingText'>
              Using Now
            </span>
            <div className='usingIcon'>
              <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
              <img src={Html} alt="" height={50} width={50}/>
              <p className='usingIconText'>HTML</p>
              </div>
              <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
              <img src={css} alt="" height={50} width={50} />
              <p className='usingIconText'>CSS</p>
              </div>
              <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
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
              <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
              <img src={figma} alt="" height={50} width={50} />
              <p className='usingIconText'>Figma</p>
              </div>
             
    
            </div>
          </div>
    </>
  )
}

export default ExpereiceSkill