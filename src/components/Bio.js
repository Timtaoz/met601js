import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <div className="bio">
      <h2>About Me</h2>
      <div className="bio-content">
        <p className="bio-text">
          Hello! My name is Tingtao Zhang, and I am a computer science student at Boston University's Metropolitan College. I was born on June 19, 2001. With a GPA of around 3.8, I have a strong academic record and a passion for learning new technologies. This course has provided me with a solid foundation in web development, covering HTML5, CSS, JavaScript, and React. I am eager to apply these skills in real-world projects and continue my journey as a developer.
        </p>
        <div className="bio-photos">
          <img src={`${process.env.PUBLIC_URL}/images/profile1.jpg`} alt="Profile 1" />
          <img src={`${process.env.PUBLIC_URL}/images/profile2.jpg`} alt="Profile 2" />
          <img src={`${process.env.PUBLIC_URL}/images/profile3.jpg`} alt="Profile 3" />
        </div>
      </div>
    </div>
  );
};

export default Bio;
