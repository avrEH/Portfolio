import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme.jpg';
import profile_img from '../../assets/logo.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
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
            <div className="aboutskill"><p>HTML, CSS & JS</p></div>
            <div className="aboutskill"><p>React JS</p></div>
            <div className="aboutskill"><p>JAVA</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;