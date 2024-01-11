import React from 'react'
import './About.css'
import Pulse from 'react-reveal/Pulse';
const About = () => {
  return (
    <>
        <Pulse>
        <div className='about' id='about'>
            <div className='row'>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                    <img src={require(`../../assests/images/mrunal.jpg`)} alt='profile_pic'/>
                   
                </div>
                <div className='col-md-12 col-xl-6 col-lg-6 col-xs-12 about-content'>
                    <h1>About Me</h1>
                    <p>
                    Full Stack developer or IT engineer who works both front and
back ends of website or application. Provide an end-to-end service, and can be involved in projects that
involve databases and building user-facing websites
                    </p>
                </div>
            </div>
        </div>
        </Pulse>
      
    </>
  )
}

export default About
