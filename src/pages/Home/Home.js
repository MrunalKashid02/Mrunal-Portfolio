import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assests/docs/Mrunal_Kashid_Resume (3).pdf';
const Home = () => {
  return (
    <>
      <div>
          <div className='container-fluid home-container'>
            <div className='container home-content'>
              <h2>Hi😊 I'm a </h2>
              <h1>
              <Typewriter
                  options={{
                    strings: ['FullStack Developer !', 'MERN Stack Developer !','React Native Developer !'],
                    autoStart: true,
                    loop: true,
                  }}
                />

              </h1>
              <div className='home-buttons'>
                <button className='btn btn-hire'>Hire Me</button>
                <a className='btn btn-cv' href={Resume} download="Mrunal_Kashid_Resume.pdf">My Resume</a>
              </div>
            </div>
          </div> 
      </div>
    </>
  );
};

export default Home
        