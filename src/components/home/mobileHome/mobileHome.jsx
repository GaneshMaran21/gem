import React, { useEffect } from 'react'
import Myimage1 from '../../../assets/png/myC2.png';
import mail from '../../../assets/svg/mobile/email.svg'
import git from '../../../assets/svg/mobile/gitHub.svg'
import linkedIn from '../../../assets/svg/mobile/linkedIn.svg'
import whatsapp from '../../../assets/svg/mobile/whatsapp.svg'
import download from '../../../assets/svg/mobile/download.svg'
import './mobileHome.scss'
import { IconType } from '../../../utils/enum/iconType';
import userInfo from '../../../userInfo/userInfo';
import WebSkills from '../../skills/skills';
import Portfolio from '../../portfolio/portfolio';
import WebContact from '../../about/webAbout';
import MobileNavbar from '../../navbar/mobileNavBar';
import FooterHome from '../footer';

const MobileHome = ({pathname}) => {


      const handleIconClick = (type) => {
        debugger
        switch (type) {
          case IconType.MAIL:
            window.open(`mailto:${userInfo?.userInfo?.userEmail}`)
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

          default: break;
        }
      }

      useEffect(()=>{
        const el=document.getElementById(pathname)
        if(el){
            el.scrollIntoView({behavior:"smooth"})
        }  
      },[])

  return (<>
    <MobileNavbar/>
    <div id='About Me' style={{
      position:"relative"
    }}>

        <img src={Myimage1} style={{height:"700px",marginTop:150,width:"500px"}} />
        <div className='ImageFooter' style={{position:"absolute",}}>
          <div className='polygonContanier'>
                <div style={{display:"flex",flexDirection:"column",gap:12,padding:20}}>
                    
                    <span className='profileText'>  
                        Hi, I am
                    </span>
                   
              

                    <span className='profileHeading' >
                        GANESH KUMARAN S
                    </span>
                    <span className='profileSmallText'>
                        Software Engineer
                    </span>
                    
                  
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:20,paddingRight:10,}}>
                        <img src={mail} onClick={()=>handleIconClick('email')}/>
                        <img src={git} onClick={()=>handleIconClick('git')} />
                        <img src={linkedIn} onClick={()=>handleIconClick('linkedIn')}/>
                        <img src={whatsapp} height={30} onClick={()=>handleIconClick('whatsApp')} />
                        <a href='./Ganesh S.pdf' download={'Resume_ganes.pdf'}>
                        <img src={download} height={30}/>
                        </a>
                </div>
          </div>
        </div>
     
    </div>
    <div style={{position:"sticky",marginTop:120}}>
        <FooterHome/>
    </div>
    <div id="Skills" >
    <WebSkills isWeb={false}/>

    </div>
    <div id='Portfolio' className='portfolioContainer' >
    <Portfolio isWeb={false}/>
    </div>
    <div id='Contact Me'>
        <WebContact isWeb={false}/>
    </div>
  </> )
}

export default MobileHome