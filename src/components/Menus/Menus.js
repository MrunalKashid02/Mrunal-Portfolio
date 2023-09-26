import React from 'react'
import './Menus.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll'
import {IoSchool} from 'react-icons/io5'
import {MdCastForEducation} from 'react-icons/md'
import {FcAbout,FcHome,FcReadingEbook,FcBiotech,FcOpenedFolder,FcContacts} from 'react-icons/fc'

const Menus = ({toggle}) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className='navbar-profile-pic'>
            <img src='https://media.licdn.com/dms/image/C4E03AQFJZ-L8Wl9O4A/profile-displayphoto-shrink_800_800/0/1654257802838?e=1700092800&v=beta&t=aQ_HRYQwNBUWUShMO3ouKyAmB5EplGgXz2aLnSo8Ru8' 
            alt='profile pic'
            />
            </div>
          </Zoom>
          <Fade left>
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />   
                  Home 
                </Link>              
              </div>
              <div className='nav-link'>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout />       
                    About 
                </Link>     
              </div>
              <div className='nav-link'>
              <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                <IoSchool />  
                Education  
              </Link>         
              </div>
              <div className='nav-link'>
              <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech />    
                Tech Stack 
              </Link>           
              </div>
              <div className='nav-link'>
              <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
                <FcOpenedFolder />    
                Projects 
              </Link>          
              </div>             
              <div className='nav-link'>
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                <FcContacts />
                Contact
              </Link>
              </div>
            </div>
          </div>
          </Fade>
        </>

      ) : (
        <>
        <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />   
                </Link>               
              </div>
              <div className='nav-link'>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcAbout />       
                </Link>            
              </div>
              <div className='nav-link'>
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                  <IoSchool />  
                </Link>             
              </div>
              <div className='nav-link'>
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech />    
                </Link>               
              </div>
              <div className='nav-link'>
                <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcOpenedFolder />    
                </Link>              
              </div>
              {/* <div className='nav-link'>
                <FcReadingEbook />             
              </div> */}
              <div className='nav-link'>
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                <FcContacts />
              </Link>
              </div>
            </div>
          </div>
          
        </>
      )}
      
      
    </>
  )
}

export default Menus
