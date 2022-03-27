import React, { useState } from 'react';

import workDayScheduler from '../../assets/images/workday-scheduler.png';
import noteTaker from '../../assets/images/note-taker.png';
import weatherDashboard from '../../assets/images/weather-dashboard.png';
import codeQuiz from '../../assets/images/code-quiz.png';
import mealExpress from '../../assets/images/meal-express.png';
import taskinatorPro from '../../assets/images/taskinator-pro.png';


const Project = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Work Day Scheduler',
      image: workDayScheduler,
      deployed: 'https://emilypier.github.io/work-day-scheduler/',
      repo: 'https://github.com/emilypier/work-day-scheduler',
      description: 'Ad app that allows you to add and delete tasks to organize your work day.'
    },
    {
      name: 'Note Taker',
      image: noteTaker,
      deployed: 'https://quiet-river-53539.herokuapp.com/',
      repo: 'https://github.com/emilypier/note-taker',
      description: 'A note taker application that uses Express.js back end to save and retrieve data from a JSON file.'
    },
    {
      name: 'Weather Dashboard',
      image: weatherDashboard,
      deployed: 'https://emilypier.github.io/WeatherDashboard/',
      repo: 'https://github.com/emilypier/WeatherDashboard',
      description: 'A website that shows the current weather and 5 day forecast for different cities in the US.'
    },
    {
      name: 'Code Quiz',
      image: codeQuiz,
      deployed: 'https://emilypier.github.io/code-quiz/',
      repo: 'https://github.com/emilypier/code-quiz',
      description: "Timed quiz to learn basic web development concepts while saving users' scores and initals into a scoreboard."
    },
    {
      name: 'Meal Express',
      image: mealExpress,
      deployed: 'https://hguleed.github.io/mealPrepExpress/',
      repo: 'https://github.com/HGuleed/mealPrepExpress',
      description: 'An app that provides a simple way to search for recipes with ingredients the user already has on hand.'
    },
    {
      name: 'Taskinator Pro',
      image: taskinatorPro,
      deployed: 'https://emilypier.github.io/taskinator-pro-new/',
      repo: 'https://github.com/emilypier/taskinator-pro-new',
      description: 'An Kanban board app that allows users to add, edit, delete tasks and arrange in different categories.'
    },
  ]);


  return (
    <div className='projectContainer my-3'>
      {projects.map((project, key)=> (
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
  );
};

export default Project;