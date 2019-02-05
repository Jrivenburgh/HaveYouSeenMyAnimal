import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { CLIENT_RENEG_LIMIT } from "tls";
import cards from "../cards.json";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";


class HomePage extends Component {
  state = {
    cards,
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
      <div
        style={{
          background: "url(" + "https://stmed.net/sites/default/files/forest-wallpapers-27863-5657410.jpg" + ")",
          backgroundColor: 'black',
          minHeight: '100%',
          minWidth: '1024px',
          width: '100%',
          // height: 'auto',
          backgroundRepeat: 'no-repeat',
          padding: '20px'
        }}
      >
        <Container fluid>
          <Row>
            <Col size="md-12">
              <h3
                style={{
                  background: 'rgb(17, 47, 69, 0.7)',
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
            </Col>
          </Row>
          <div
            style={{
              background: 'rgb(17, 47, 69, 0.5)',
              color: 'white',
              margin: '20px',
            }}
          >
            <Row>
              <Col size="md-12">
                <h1
                  style={{
                    padding: '40px',
                    textAlign: 'center',
                  }}
                >
                  Lets find these pets!
            </h1>
              </Col>
            </Row>
            <Wrapper>
              {this.state.cards.map(card => (
                <Card
                  id={card.id}
                  key={card.id}
                  image={card.image}
                  name={card.name}
                />
              ))}
            </Wrapper>
          </div>
        </Container>
      </div>
    );
  }
}

export default HomePage;
