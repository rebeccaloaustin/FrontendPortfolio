import React from "react";
import { Link} from "react-router-dom";


function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="navBar">
        HOME
      </Link>
      <div className="strikeThrough"> hello i'm rebecca</div> 
    </header>
  );
}

export default Header;



  