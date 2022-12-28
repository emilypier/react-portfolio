import React from 'react';
import profilePic from "../../assets/images/profile-pic.jpg";

function About() {

  return (
    <section className="my-3 about">
      <h2>about me</h2>
      <img src={profilePic} alt="Emily with glasses"></img>
      <p>
        Hi! My name is <span>Emily Pierson</span>. 
        <br></br>
        I'm Full-Stack Web Developer with copyediting experience. I've recently earned a certificate in Full-Stack Web Development from the Ohio State University, with newly developed skills in JavaScript, CSS, HTML, and Node.js. I have strengths in organization, attention to detail, and meeting deadlines. I have an aptitude to work independently and collaboratively in a group to ensure scalable results for stakeholders. I contributed to MERN app using agile development and OOP techniques. I’m motivated to learn new technologies and problem-solve.
      </p>
    </section>
  )
}

export default About;