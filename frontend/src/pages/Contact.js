import React from "react";
import "../App.css"; 

function Contact(props) {

  const emailAddress = "rebeccaloaustin@gmail.com";
  const linkedinUrl = "https://linkedin.com/in/rebeccaloaustin";
  const githubUrl = "https://github.com/rebeccaloaustin";

  return (
    <div>
      <h1 className="hello">Hello.</h1>
      <h2 className="contactBody" id="contactParagraph" >
        Reach out and let's build something incredible together! Whether you
        have a project idea, need a consultation, or just want to connect, I'm
        eager to hear from you. Let's bring your web development vision to life!
      </h2>
      <p className="contactBody" id="contactEmail" >Email: <a className="contact" href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
      <p className="contactBody" id="contactInternet">On the Internet: <a className="contact" href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a> / <a className="contact" href={githubUrl} target="_blank" rel="noopener noreferrer">Github</a></p>
    </div>
  );
}

export default Contact;

