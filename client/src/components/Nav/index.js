import React from "react";
import "./Nav.css";
const Nav = props => (
  <div className="header">
      <ul>
          <li><a href="/Home"><h2 className="title animated swing">EyeOut</h2></a></li>
          {/* <GameMessage score={props.score} topScore={props.topScore} /> */}
          {/* <li id="score">Score: {props.score} | Top Score: {props.topScore}</li> */}
          <li className="log"><a href="/Login"><span><img className='login' alt-text= "login button"/></span> Log In </a> | <a href="/Signup"><span><img className='signup' alt-text= "signup button"/></span> Sign Up</a></li>
      </ul>
      
  </div>
)

export default Nav;
