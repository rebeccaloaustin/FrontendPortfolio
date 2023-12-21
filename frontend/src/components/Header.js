import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";

function Header() {
  return (
    <header >
      <Link to="/" className="navBar">
        HOME
      </Link>
      <div className="strikeThrough"> hello i'm rebecca</div> 
    </header>
  );
}

export default Header;



  