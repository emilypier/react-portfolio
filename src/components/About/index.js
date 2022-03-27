import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-3" >
      <h1 id="about">About me</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div >
        <p>
        My name's Emily Pierson. I'm a photographer, editor, artist and web developer from Cincinnati, Ohio. Some of my favorite pastimes include reading, discovering new music, collecting vintage clothes and writing.
      </p>
      </div>
    </section>
  )
}

export default About;