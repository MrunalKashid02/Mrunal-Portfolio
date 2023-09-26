import React ,{useState}from 'react'
import './Contact.css'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import Pulse from 'react-reveal/Pulse';
import {  toast } from 'react-toastify';
import axios from 'axios'

const Contact = () => {
  const [name, setname]=useState("");
  const [email, setemail]=useState("");
  const [msg, setmsg]=useState("");
  //handle submit button
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      if(!name || !email || !msg){
        toast.error('Please Provide all Fields');
      }
      const res=await axios.post('http://localhost:8080/api/v1/portfolio/sendEmail',{name,email,msg});
      if(res.data.success){
        toast.success(res.data.message)
        setname("");
        setemail("");
        setmsg("");
      }else{
        toast.error(res.data.message);
      }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Pulse>
      <div className=' contact' id='contact'>
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
                    <h6>Contact With
                      <BsLinkedin color='blue'size={30} className='ms-2'/>
                      <BsGithub color='black'size={30} className='ms-2'/>
                    </h6>
                  </div>
                
                <div className='row px-3 mb-4'>
                  <div className='line'/>
                  <small className='or text-center'>OR</small>
                  <div className='line'/>
                </div>
                <div className='row px-3'>
                  <input type='text' name='name' placeholder='Enter Your Name' className='mb-3' value={name} onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div className='row px-3'>
                  <input type='email' name='email' placeholder='Enter Your Email' className='mb-3' value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div className='row px-3'>
                  <textarea type='text' name='msg' placeholder='Enter Your Message' className='mb-3' value={msg} onChange={(e)=>setmsg(e.target.value)}/>
                </div>
                <div className='row px-3'>
                  <button className='btn btn-primary' onClick={handleSubmit}>SEND MESSAGE</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </Pulse>
    </>
  )
}

export default Contact