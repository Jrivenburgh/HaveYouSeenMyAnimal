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
              fontFamily: 'Fredoka One, sans-serif',
            }}
          >
           
                  <h3
                    style={{
                      background: 'rgb(52, 58, 64, 0.9)',
                      borderRadius:'10px',
                      position: 'center',
                      color: 'white',
                      padding: '60px',
                      margin: '10px 150px 0px 150px',
                    }}
                  >
                  EyeOut is a much better replacement for lost pet posters. We aim to help you get your pet back safely. If your pet goes missing well send out an alert to everyone in the area they were last seen.
                  </h3>
             
              <div
                style={{
                  background: 'rgb(52, 58, 64, 0.9)',
                  borderRadius:'10px',
                  color: 'white',
                  margin: '10px 200px 0px 200px',
                }}
              >
              
                    <h1
                      style={{
                        padding: '40px',
                        textAlign: 'center',
                        textShadow: '2px 2px black',
                      }}
                    >
                      Lets find these pets!
                </h1>
                 
            
              </div>
           
          </body>
        );
    }
}