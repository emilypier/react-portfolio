import React, { useState } from 'react';

const Project = () => {
  const [projects] = useState([
    {
      name: 'Work Day Scheduler',
      image: '',
      deployed: 'https://emilypier.github.io/work-day-scheduler/',
      repo: 'https://github.com/emilypier/work-day-scheduler',
      description: 'Ad app that allows you to add and delete tasks to organize your work day.'
    },
    {
      name: 'Note Taker',
      image: '',
      deployed: 'https://quiet-river-53539.herokuapp.com/',
      repo: 'https://github.com/emilypier/note-taker',
      description: 'A note taker application that uses Express.js back end to save and retrieve data from a JSON file.'
    },
    {
      name: 'Weather Dashboard',
      image: '',
      deployed: 'https://emilypier.github.io/WeatherDashboard/',
      repo: 'https://github.com/emilypier/WeatherDashboard',
      description: 'A website that shows the current weather and 5 day forecast for different cities in the US.'
    },
    {
      name: 'Code Quiz',
      image: '',
      deployed: 'https://emilypier.github.io/code-quiz/',
      repo: 'https://github.com/emilypier/code-quiz',
      description: "Timed quiz to learn basic web development concepts while saving users' scores and initals into a scoreboard."
    },
    {
      name: 'Meal Express',
      image: '',
      deployed: 'https://hguleed.github.io/mealPrepExpress/',
      repo: 'https://github.com/HGuleed/mealPrepExpress',
      description: 'An app that provides a simple way to search for recipes with ingredients the user already has on hand.'
    },
    {
      name: 'Taskinator Pro',
      image: '',
      deployed: 'https://emilypier.github.io/taskinator-pro-new/',
      repo: 'https://github.com/emilypier/taskinator-pro-new',
      description: 'An Kanban board app that allows users to add, edit, delete tasks and arrange in different categories.'
    },
  ]);

  


  return (
    <div>
      <div className="flex-row">
          <img
            src={require(`../../assets/small/${image}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
      </div>
    </div>
  );
};

export default Project;