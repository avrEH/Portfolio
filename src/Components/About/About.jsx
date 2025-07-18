import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme.png';
import profile_img from '../../assets/logo.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" style={{ height: "160px", width: "auto" }} />
      </div>
      <div className="about-section">
        <div className="about-left">
           <img
      src={profile_img}
      alt=""
      style={{
        width: "100%",
        maxWidth: "250px",
        height: "auto",
        borderRadius: "50%",
        objectFit: "cover",
        border: "8px solid #2a2a2a"
      }}
    />
  </div>
  <div className="about-right">
    <div className="about-para">
      <p>
        I code primarily in Java, with a strong grip on data structures and algorithms, and I love building engaging frontend experiences with web technologies. I'm also diving deep into the MERN stack and AI application engineering, constantly pushing myself to learn and grow.
      </p>
      <p>
        Outside the world of code, I'm a cinematography and video editing enthusiast — combining logic with storytelling is where I thrive. I'm currently looking for internship opportunities to apply my skills, contribute to real-world projects, and keep learning.
      </p>
          </div>
          <div className="about-skills">
            <div className="aboutskill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
            <div className="aboutskill"><p>JS</p><hr style={{width:"70%"}}/></div>
            <div className="aboutskill"><p>ReactJS</p><hr style={{width:"60%"}}/></div>
            <div className="aboutskill"><p>JAVA</p><hr style={{width:"80%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Delloite Certified</h1>
          <p>Data Analytics Job Simulation</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Data science master virtual internship</h1>
          <p>Data science master virtual internship inAll India Council for Technical Education (AICTE)</p>
        </div>
       
      </div>
    </div>
  );
};

export default About;