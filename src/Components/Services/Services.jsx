import React from 'react'
import './Services.css';
import theme_pattern from '../../assets/theme.png';
import Services_Data from '../../assets/services_data';

const Services = () => {
  return (
 <div className="services">
    <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" style={{ height: "160px", width: "auto" }} />

    </div>
    <div className="services-container">
        {Services_Data.map((service,index)=>{
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services_readmore">
                    <p>Read More</p>
                    
                </div>
            </div>

        })}
    </div>
 </div>
  )
}

export default Services