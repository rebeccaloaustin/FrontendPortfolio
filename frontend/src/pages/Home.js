import "../../src/App.css";
import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className="home">
      <h2 className="aboutTitle">REBECCA AUSTIN</h2>
      <h3 className="aboutMe">Full-Stack Web Developer</h3>
      <div className="links">
        <Link to="/projects" className='projectsLink'>PROJECTS</Link>
        <Link to="/about" className='aboutLink'>ABOUT</Link>
        <Link to="/contact" className='contactLink'>CONTACT</Link>
      </div>
    </div>
  );
};

export default Home;

  