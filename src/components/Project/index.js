import React, { useState } from 'react';
import projectsList from './projects';

const Project = () => {
  // const [projects, setProjects] = useState([]);
  
  // // const handleProjects = function() {
  // //   setProjects(projectsList)
  // // }


  return (
    <div>
      <div> 
        <h2>projects</h2>
      </div>
      <div className='projectContainer my-3'>
        {projectsList.map((project, key)=> (
          <div key={key} className="project card">
            <div className='card-body'>
              <a href={project.deployed}>
                <img
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
    </div>
  );
};

export default Project;