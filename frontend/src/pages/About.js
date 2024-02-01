import { useState, useEffect } from "react";
import "../../src/App.css";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState({});

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getAboutData()
  }, [])

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="aboutPage">
      <h2 className="aboutPageTitle">About</h2>
       <img src={about.headshot} className="headshot"/>
       <h3 className="aboutIntro">I'm Rebecca. Creative. Problem Solver. </h3>
      <p className="aboutBody" id="bio1" >{about.bio1}</p>
      <p className="aboutBody" id="bio2" >{about.bio2}</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;

