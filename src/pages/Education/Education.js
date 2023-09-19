import React from 'react'
import './Education.css'
import {IoSchool} from 'react-icons/io5'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Education = () => {
  return (
    <>
      <div className='education'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        Education details
        </h2>
        <hr/>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2018 - 2020"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<IoSchool />}
        >
            <h3 className="vertical-timeline-element-title">HSC</h3>
            <h4 className="vertical-timeline-element-subtitle">Residentilal Junior College, Ahmednagar</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - 2024"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<IoSchool />}
        >
            <h3 className="vertical-timeline-element-title">BE IT</h3>
            <h4 className="vertical-timeline-element-subtitle">Pune Institute of Computer Technology, Pune</h4>
        </VerticalTimelineElement>
        </VerticalTimeline>
        
      </div>
    </>
  )
}

export default Education
