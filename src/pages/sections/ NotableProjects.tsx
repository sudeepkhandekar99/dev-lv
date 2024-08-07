// UI Components
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

// Data
import notableProjectsData from '../../data/notable-projects';

// ------------------

function  NotableProjects() {

  return (
    <section id="about" className="section">
      <div className="section-wrapper block content-1170 center-relative">
        {/* <div className="page-title-holder">
          <h2 className="entry-title">{notableProjectsData.title}</h2>
        </div> */}

        <div className="content-wrapper">
        <div className="image-grid">
          {notableProjectsData.projects.map((project, index) => (
            <div>
            <div className="image-container" key={index}>
              <img src={project.image} alt={`Notable Project ${index + 1}`} />
              <div className="hover-text">{project.description}</div>
            </div>
            <span>{project.caption}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default  NotableProjects;
