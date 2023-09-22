import React from 'react'
import './Menus.css'
import {IoSchool} from 'react-icons/io5'
import {MdCastForEducation} from 'react-icons/md'
import {FcAbout,FcHome,FcReadingEbook,FcBiotech,FcOpenedFolder,FcContacts} from 'react-icons/fc'
const Menus = ({toggle}) => {
  return (
    <>
      {toggle ? (
        <>
          <div className='navbar-profile-pic'>
          <img src='https://media.licdn.com/dms/image/C4E03AQFJZ-L8Wl9O4A/profile-displayphoto-shrink_800_800/0/1654257802838?e=1700092800&v=beta&t=aQ_HRYQwNBUWUShMO3ouKyAmB5EplGgXz2aLnSo8Ru8' 
          alt='profile pic'
          />
          </div>
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <FcHome />   
                Home             
              </div>
              <div className='nav-link'>
                <FcAbout />       
                About         
              </div>
              <div className='nav-link'>
                <IoSchool />  
                Education              
              </div>
              <div className='nav-link'>
                <FcBiotech />    
                Tech Stack            
              </div>
              <div className='nav-link'>
                <FcOpenedFolder />    
                Projects           
              </div>
              {/* <div className='nav-link'>
                <FcReadingEbook />  
                Work Experience             
              </div> */}
              <div className='nav-link'>
                <FcContacts />
                Contact
              </div>
            </div>
          </div>
        </>

      ) : (
        <>
        <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <FcHome />               
              </div>
              <div className='nav-link'>
                <FcAbout />              
              </div>
              <div className='nav-link'>
                <IoSchool />             
              </div>
              <div className='nav-link'>
                <FcBiotech />               
              </div>
              <div className='nav-link'>
                <FcOpenedFolder />             
              </div>
              {/* <div className='nav-link'>
                <FcReadingEbook />             
              </div> */}
              <div className='nav-link'>
                <FcContacts />
              </div>
            </div>
          </div>
        </>
      )}
      
      
    </>
  )
}

export default Menus
