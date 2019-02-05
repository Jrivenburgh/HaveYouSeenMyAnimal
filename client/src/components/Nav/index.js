import React from "react";
import "./Nav.css";
const Nav = props => (
  <div className="header">
      <ul>
          <li><a href="/Home"><h2 className="title animated swing">eyeout</h2></a></li>
          {/* <GameMessage score={props.score} topScore={props.topScore} /> */}
          {/* <li id="score">Score: {props.score} | Top Score: {props.topScore}</li> */}
          <li className="log"><a href="/Login">login </a><a href="/Signup"><span><img className='signup' alt-text= "signup button"/></span> signup</a></li>
      </ul>
      
  </div>
)

export default Nav;
