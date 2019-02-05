import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import css from "./Signup.css"
class Signup extends Component {
  state = {
    Animal: {}
  };
  // When this component mounts, grab the Animal with the _id of this.props.match.params.id
  // e.g. localhost:3000/Animals/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getAnimal(this.props.match.params.id)
      .then(res => this.setState({ Animal: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div style={{
        // background: "url(" + "https://static01.nyt.com/images/2018/02/25/realestate/25SUBURBS-slide-X8YZ/25SUBURBS-slide-X8YZ-superJumbo.jpg?quality=75&auto=webp&disable=upscale" + ")",
        // backgroundColor: 'black',
        //   minHeight: '100%',
        //   minWidth: '1024px',
        //   width: '100%',
        //   // height: 'auto',
        //   backgroundRepeat: 'no-repeat',
        //   padding: '20px'
      }}
      >
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <a href="/"><h1>
                signup
              </h1></a>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Signup;