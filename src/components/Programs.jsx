import React from 'react';
import '../styles/Programs.css';
import { FaHeart, FaBullhorn, FaUsers } from 'react-icons/fa';

const Programs = () => {
  const programs = [
    {
      id: 1,
      icon: <FaHeart />,
      title: "Empowerment & Wellbeing",
      items: ["Mental Health Support", "Mentorship Programs", "Skills Workshops"],
      image: "/images/empowerment-program.jpg",
      color: "#FF6B6B"
    },
    {
      id: 2,
      icon: <FaBullhorn />,
      title: "Advocacy & Awareness",
      items: ["Ending Period Poverty", "Public Campaigns", "Policy Dialogue"],
      image: "/images/advocacy-event.jpg",
      color: "#4ECDC4"
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "Community Building",
      items: ["Support Networks", "Community Workshops", "Volunteer Opportunities"],
      image: "/images/community-event.jpg",
      color: "#95E1D3"
    }
  ];

  return (
    <section className="programs" id="programs">
      <h2>Our Impactful Programs</h2>
      <div className="programs-grid">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <div 
              className="program-header"
              style={{ backgroundColor: program.color }}
            >
              <div className="program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
            </div>
            <div className="program-image">
              <img src={program.image} alt={program.title} />
            </div>
            <ul className="program-list">
              {program.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;