import React from 'react'
import mac from '../../assets/svg/mac.svg';
import windows from '../../assets/svg/windows.svg';
import expo from '../../assets/svg/client.svg';
import androidStudio from '../../assets/svg/androidStudio.svg';
import vsCode from '../../assets/svg/vscode.svg';
import npm from '../../assets/svg/npm.svg';

const ExtraSkill = () => {
  return (
    <>
     <div className='using'>
        <span className='usingText'>
          Other Skills
        </span>
        <div className='usingIcon'>
          <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
          <img src={vsCode} alt="" height={50} width={50}/>
          <p className='usingIconText'>vs code</p>
          </div>
          <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
         <img src={expo} alt="" height={50} width={50} />
          <p className='usingIconText'>expo</p>
          </div>
          <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
          <img src={windows} alt="" height={50} width={50} />
          <p className='usingIconText'>windows</p>
          </div>
          <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
          <img src={mac} alt="" height={50} width={50} />
          <p className='usingIconText'>mac</p>
          </div>
          <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
          <img src={npm} alt="" height={50} width={50} />
          <p className='usingIconText'>npm</p>
          </div>
                <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
          <img src={androidStudio} alt="" height={50} width={50} />
          <p className='usingIconText'>android Studio</p>
          </div>
          {/* <div style={{flexDirection:"column",gap:8,justifyItems:'center',display:"flex",alignItems:"center"}}>
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
          </div> */}
          

        </div>
      </div>

    </>
  )
}

export default ExtraSkill