import React from 'react'
import './project.css'
const Project = () => {
  return (
    <>
      <div className='container project'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top Recent Projects</h2><hr/>
        <p className='pb-3 text-center'> 
            👉  Here is my recent Projects with link and source code  
        </p>
        {/* card design */}
        <div className='row' id="ads">
          <div className='col-md-5'>
              <div className='card rounded'>
                <div className='card-image'>
                  <span className='card-notify-badge'>Full stack</span>
                  <img src='https://cdn.motocms.com/src/868x580/98900/98973-original-1200.jpg' alt='project1'/>
                </div>
                <div className='card-image-overly m-auto mt-3'>
                  <span className='card-detail-badge'>Node</span>
                  <span className='card-detail-badge'>Expressjs</span>
                  <span className='card-detail-badge'>MongoDB</span>
                  <span className='card-detail-badge'>react</span>
                </div>
                <div className='card-body text-center'>
                  <div className='ad-title m-auto'>
                    <h5 className='text-uppercase'>
                      Doctor Appointment System
                    </h5>
                  </div>
                  <a  className='ad-btn' href='https://github.com/MrunalKashid02/Doctor-Appoitment-System'>View</a>
                </div>
              </div>
          </div>
          <div className='col-md-5'>
              <div className='card rounded'>
                <div className='card-image'>
                  <span className='card-notify-badge'>Full stack</span>
                  <img src='https://cdn.motocms.com/src/868x580/98900/98973-original-1200.jpg' alt='project1'/>
                </div>
                <div className='card-image-overly m-auto mt-3'>
                  <span className='card-detail-badge'>Node</span>
                  <span className='card-detail-badge'>Expressjs</span>
                  <span className='card-detail-badge'>MongoDB</span>
                  <span className='card-detail-badge'>react</span>
                </div>
                <div className='card-body text-center'>
                  <div className='ad-title m-auto'>
                    <h5 className='text-uppercase'>
                      Doctor Appointment System
                    </h5>
                  </div>
                  <a  className='ad-btn' href='#'>View</a>
                </div>
              </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Project
