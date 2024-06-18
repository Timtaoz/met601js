import React, { useState } from 'react';
import './SkillsWheel.css';

const SkillsWheel = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript'];
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const newRotation = rotation + (Math.random() * 360 + 360 * 3);
    setRotation(newRotation);
  };

  return (
    <div className="skills-wheel-container">
      <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
        {skills.map((skill, index) => (
          <div key={index} className="skill" style={{ transform: `rotate(${index * (360 / skills.length)}deg)` }}>
            <div className="skill-inner">{skill}</div>
          </div>
        ))}
      </div>
      <button onClick={spinWheel}>Spin</button>
    </div>
  );
};

export default SkillsWheel;
