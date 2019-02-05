import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import css from "./Login.css"

class Login extends Component {
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
      }}
      >
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <a href="/"><h1>
               login
              </h1></a>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Login;
