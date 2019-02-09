// Home.js
import React, { Component } from "react";


export default class Home extends Component {
    render() {
        return (
            <body
            style={{
              background: "url(https://stmed.net/sites/default/files/forest-wallpapers-27863-5657410.jpg)",
              backgroundColor: 'black',
              minHeight: '100%',
              minWidth: '1024px',
              width: '100%',
              height: 'auto',
              backgroundRepeat: 'no-repeat',
              padding: '20px',
              position: 'fixed',
              fontFamily:'Righteous, cursive',
            }}
          >
           
                  <h3
                    style={{
                      background: 'rgb(52, 58, 64, 0.9)',
                      position: 'center',
                      color: 'white',
                      padding: '40px',
                      marginTop: '100px',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </h3>
             
              <div
                style={{
                  background: 'rgb(52, 58, 64, 0.9)',
                  color: 'white',
                  margin: '20px',
                }}
              >
              
                    <h1
                      style={{
                        padding: '40px',
                        textAlign: 'center',
                      }}
                    >
                      Lets find these pets!
                </h1>
                 
            
              </div>
           
          </body>
        );
    }
}