import React,{useState} from 'react'
import './MobileNav.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-scroll'
import {IoSchool} from 'react-icons/io5'
import {AiOutlineMenuFold} from 'react-icons/ai'
import {FcAbout,FcHome,FcReadingEbook,FcBiotech,FcOpenedFolder,FcContacts} from 'react-icons/fc'

const MobileNav = () => {
    const [open,setOpen]=useState(false);
    //handleopen
    const handleopen=()=>{
        setOpen(!open);
    }
    //handle menu clicks
    const handlemenuclick=()=>{
        setOpen(false);
    }
  return (
    <>
        <div className='mobile-nav'>
            <div className='mobile-nav-header'>
                {open ? (< AiOutlineMenuFold size={20} className='mobile-nav-icon' onClick={handleopen} />):(<GiHamburgerMenu size={20} className='mobile-nav-icon' onClick={handleopen}/>)}
                <span className='mobile-nav-title'>Mrunal's Portfolio</span>
            </div> 
            {open && (
                    <div className='mobile-nav-menu'>
                        <div className='nav-items'>
                            <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handlemenuclick}>
                                    <FcHome />   
                                    Home 
                                </Link>              
                            </div>
                            <div className='nav-link'>
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handlemenuclick}>
                                    <FcAbout />       
                                    About 
                                </Link>     
                            </div>
                            <div className='nav-link'>
                            <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handlemenuclick}>
                                <IoSchool />  
                                Education  
                            </Link>         
                            </div>
                            <div className='nav-link'>
                            <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} onClick={handlemenuclick}>
                                <FcBiotech />    
                                Tech Stack 
                            </Link>           
                            </div>
                            <div className='nav-link'>
                            <Link to="project" spy={true} smooth={true} offset={-100} duration={100} onClick={handlemenuclick}>
                                <FcOpenedFolder />    
                                Projects 
                            </Link>          
                            </div>             
                            <div className='nav-link'>
                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handlemenuclick}>
                                <FcContacts />
                                Contact
                            </Link>
                            </div>
                            </div>
                        </div>
                    </div>
            )}

        </div>
    </>
  )
}

export default MobileNav