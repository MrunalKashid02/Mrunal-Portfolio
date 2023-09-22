import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className=' contact'>
        <div className='card card0 border-0'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <div className='card1'>
                <div className='row border-line'>
                  <img src='https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000' alt='ocontact' className='image'/>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-6'>
              <div className='card2 d-flex card border-0 px-4 py-5'>
                <div className='row'>
                  <div className='row'>
                    <h6>Contact WITH ICONS</h6>
                  </div>
                
                <div className='row px-3 mb-4'>
                  <div className='line'/>
                  <small className='or text-center'>OR</small>
                  <div className='line'/>
                </div>
                <div className='row px-3'>
                  <input type='text' name='name' placeholder='Enter Your Name' className='mb-3'/>
                </div>
                <div className='row px-3'>
                  <input type='email' name='email' placeholder='Enter Your Email' className='mb-3'/>
                </div>
                <div className='row px-3'>
                  <textarea type='text' name='msg' placeholder='Enter Your Message' className='mb-3'/>
                </div>
                <div className='row px-3'>
                  <button className='' type='submit'>SEND MESSAGE</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Contact