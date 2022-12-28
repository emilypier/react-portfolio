import React, { useState } from 'react';
import projectsList from './projects';

const Project = () => {

  return (
    <section className="my-3">
      <h2>projects</h2>
      <div className='projectContainer'>
        
        {projectsList.map((project, key)=> (
          <div key={key} className="project card">
            <div className='card-body'>
              <a href={project.deployed}>
                <img
                  id="projectImg"
                  class="card-img-top"
                  src={project.image}
                  alt={project.name}
                />
              </a>
              <h3 className='card-title'>{project.name}</h3>
              <p className='card-text'>{project.description}</p>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Project;