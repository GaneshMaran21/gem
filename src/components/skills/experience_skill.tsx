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
import redux from '../../assets/svg/redux.svg';
import express from '../../assets/svg/redux.svg';
import mongo from '../../assets/svg/mongo.svg';

const ExpereiceSkill = ({isWeb}) => {
  const experience_list = 
  [
    {
    name:"React JS",
    icon:react
  },
    {
    name:"React Native",
    icon:rn2
  },
  
    {
    name:"Java Script",
    icon:js
  },
    {
    name:"Type Script",
    icon:tsx
  },
   
    {
    name:"Redux",
    icon:redux
  },
    {
    name:"Node JS",
    icon:node
  },
    {
    name:"Express",
    icon:express
  },
    {
    name:"Mongo DB",
    icon:mongo
  },
    {
    name:"Mantine",
    icon:mantine
  },
    {
    name:"BootStrap",
    icon:bootstrap
  },
  {
    name:"figma",
    icon:figma
  },
    {
    name:"css",
    icon:css
  },
    {
    name:"HTML",
    icon:Html
  },

]
  return (
    <>
      <div className=  'using' >
            <span className='usingText'>
              Using Now
            </span>
            <div className='usingIcon' >
              {Array.isArray(experience_list)&&experience_list.length>0 ? 
              experience_list.map((item,index)=>{
                return(
            
                     <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
              <img src={item.icon} alt="" height={50} width={50} />
              <p className='usingIconText'>{item.name.toUpperCase()}</p>
              </div>
                )
              })   : <p> Something went wrong </p>
            }
            </div>
          </div>
    </>
  )
}

export default ExpereiceSkill