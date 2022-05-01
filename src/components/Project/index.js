import React, { useState } from 'react';

import workDayScheduler from '../../assets/images/workday-scheduler.png';
import noteTaker from '../../assets/images/note-taker.png';
import weatherDashboard from '../../assets/images/weather-dashboard.png';
import codeQuiz from '../../assets/images/code-quiz.png';
import mealExpress from '../../assets/images/meal-express.png';
import taskinatorPro from '../../assets/images/taskinator-pro.png';
import drinkAndDraw from '../../assets/images/drink-and-draw.png';
import techBlog from '../../assets/images/tech-blog.png';
import passwordGenerator from '../../assets/images/password-generator.png';
import ecommerceBackEnd from '../../assets/images/ecommerce-POST-tag.png';


const Project = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Drink-and-Draw',
      image: drinkAndDraw,
      deployed: 'https://rocky-river-99926.herokuapp.com/',
      repo: 'https://github.com/emilypier/drink-and-draw',
      description: 'Agile project. An Ecommerce website where you can order a package which includes a drink and materials to paint a picture for yourself or for a group.'
    },
    {
      name: 'Meal Express',
      image: mealExpress,
      deployed: 'https://hguleed.github.io/mealPrepExpress/',
      repo: 'https://github.com/HGuleed/mealPrepExpress',
      description: 'Agile project. An app that provides a simple way to search for recipes with ingredients the user already has on hand.'
    },
    {
      name: 'MVC Tech Blog',
      image: techBlog,
      deployed: 'https://lit-hamlet-16524.herokuapp.com/',
      repo: 'https://github.com/emilypier/mvc-tech-blog',
      description: 'A CMS-style blog site where a user can publish articles, blog posts, and their thoughts and opinions. Allows user to log in with a username and password to create, edit and delte blog posts.'
    },
    {
      name: 'E-commerce Back End',
      image: ecommerceBackEnd,
      deployed: 'https://github.com/emilypier/ecommerce-back-end',
      repo: 'https://github.com/emilypier/ecommerce-back-end',
      description: 'The back-end code for a e-commerce site.'
    },
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
      name: 'Taskinator Pro',
      image: taskinatorPro,
      deployed: 'https://emilypier.github.io/taskinator-pro-new/',
      repo: 'https://github.com/emilypier/taskinator-pro-new',
      description: 'An Kanban board app that allows users to add, edit, delete tasks and arrange in different categories.'
    },
    {
      name: 'Password Generator',
      image: passwordGenerator,
      deployed: 'https://emilypier.github.io/PasswordGenerator/',
      repo: 'https://github.com/emilypier/PasswordGenerator',
      description: 'A website that allows users to specify which characters they want in their password, then generates it on the page.'
    },
  ]);


  return (
    <div>
      <div> 
        <h2>projects</h2>
      </div>
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
    </div>
  );
};

export default Project;