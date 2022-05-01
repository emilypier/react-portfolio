import React from 'react';

function Contact() {
  return (
    <section className="my-3 contact"> 
      <h2 data-testid="h1tag">contact me</h2>
      <p> 513.444.8826</p>
      <a href="mailto:piersoee@gmail.com">Email me</a>
      <a href="https://github.com/emilypier">GitHub</a>
      <a href="https://www.linkedin.com/in/emilypierson/">LinkedIn</a>
      <div className="fade"></div> 
    </section>
  );
}
  
export default Contact;