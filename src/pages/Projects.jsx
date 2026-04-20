import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import '../styles/pages/Projects.css';

const Projects = ({ setCurrentPage }) => {
  const projects = [
    {
      id: 1,
      title: 'School Meal Program',
      goal: 50000,
      raised: 38500,
      description: 'Providing nutritious meals to 2,000 children daily',
      image: 'https://images.unsplash.com/photo-1589985643862-2b3de9dc9d1f?w=500&h=300&fit=crop',
      impact: '2,000 children fed daily'
    },
    {
      id: 2,
      title: 'Educational Scholarships',
      goal: 30000,
      raised: 22100,
      description: 'Full scholarships for underprivileged students',
      image: 'https://images.unsplash.com/photo-1507842072343-583f20270319?w=500&h=300&fit=crop',
      impact: '500 students supported'
    },
    {
      id: 3,
      title: 'Mentorship Initiative',
      goal: 20000,
      raised: 15800,
      description: 'Pairing youth with professional mentors',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      impact: '300 mentorships active'
    },
    {
      id: 4,
      title: 'Healthcare Access',
      goal: 40000,
      raised: 28900,
      description: 'Free medical clinics in rural areas',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
      impact: '5,000 people served'
    },
  ];

  return (
    <div className="projects-page">
      <button className="back-btn" onClick={() => setCurrentPage('home')}>
        <FiArrowLeft size={20} /> Back
      </button>

      <div className="projects-header">
        <h1>Active Projects</h1>
        <p>See where your donation makes the biggest impact</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const progress = (project.raised / project.goal) * 100;
          return (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-impact">
                  <span className="impact-badge">📊 {project.impact}</span>
                </div>

                <div className="progress-section">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                  </div>
                  <div className="progress-text">
                    <span>${project.raised.toLocaleString()} raised</span>
                    <span>${project.goal.toLocaleString()} goal</span>
                  </div>
                </div>

                <button 
                  className="donate-project-btn"
                  onClick={() => setCurrentPage('donate')}
                >
                  Support This Project
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <section className="project-stats">
        <h2>Overall Campaign Statistics</h2>
        <div className="stats-overview">
          <div className="stat">
            <h3>$2.5M</h3>
            <p>Total Raised</p>
          </div>
          <div className="stat">
            <h3>12,450</h3>
            <p>Lives Impacted</p>
          </div>
          <div className="stat">
            <h3>4</h3>
            <p>Active Projects</p>
          </div>
          <div className="stat">
            <h3>85%</h3>
            <p>Funds to Programs</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
