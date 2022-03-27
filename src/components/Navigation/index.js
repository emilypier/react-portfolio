import React from 'react';

function Nav(props) {
  const {setPage} = props
  return (
    <nav>
      <li onClick={() => setPage("about")}>About Me</li>
      <li onClick={() => setPage("projects")}>Projects</li>
      <li onClick={() => setPage("resume")}>Resume</li>
      <li onClick={() => setPage("contact")}>Contact</li>
    </nav>
  );
}

export default Nav;