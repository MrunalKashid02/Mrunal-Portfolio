import React from 'react'
import { useTheme } from '../../context/themeContext';
import './home.css'
import Fade from 'react-reveal/Fade';
import {BsMoonFill,BsSunFill} from 'react-icons/bs'
import Typewriter from 'typewriter-effect';
import Resume from '../../assests/docs/Mrunal_Kashid_Resume (3).pdf';
const Home = () => {
  const [theme, setTheme]=useTheme();
  //To handle theme we have define a theme
  const handleTheme=()=>{
    setTheme((prevState)=>(prevState ==='light' ? 'dark' :'light'))
  }

  return (
    <>
          <div className='container-fluid home-container' id='home'>
            <div className='theme-btn' onClick={handleTheme}>
              {theme === 'light' ? (<BsMoonFill />) :(<BsSunFill/>)}
            </div>
            <div className='container home-content'>
              <Fade right>
              <h2>Hi😊 I'm a </h2>
              <h1>
              <Typewriter
                  options={{
                    strings: ['FULL STACK WEB DEVELOPER !', 'MERN STACK DEVELOPER !','BACKEND DEVELOPER !'],
                    autoStart: true,
                    loop: true,
                  }}
                />

              </h1>
              </Fade>
              <Fade bottom>
              <div className='home-buttons'>
                <a className='btn btn-hire' rel='noreferrer' target='_blank'>Hire Me</a>
                <a className='btn btn-cv' href={Resume} download="Mrunal_Kashid_Resume.pdf">My Resume</a>
              </div>
              </Fade>
            </div>
          </div> 
    </>
  );
};

export default Home
        