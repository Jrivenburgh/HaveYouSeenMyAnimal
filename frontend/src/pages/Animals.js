import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row} from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import css from "./index.css"

class Animals extends Component {
  state = {
    Animals: [],
    Type: "",
    Breed: "",
    Description: "",
    Picture: "",
  };

  componentDidMount() {
    this.loadAnimals();
  }

  loadAnimals = () => {
    API.getAnimals()
      .then(res =>
        this.setState({ Animals: res.data, Type: "", Breed: "", Description: "", Picture: ""})
      )
      .catch(err => console.log(err));
  };

  deleteAnimal = id => {
    API.deleteAnimal(id)
      .then(res => this.loadAnimals())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.Type && this.state.Breed) {
      API.saveAnimal({
        Type: this.state.Type,
        Breed: this.state.Breed,
        Description: this.state.Description,
        Picture: this.state.Picture,
        date: this.state.date
      })
        .then(res => this.loadAnimals())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <body style={{
        background: "url(http://inrix.com/wp-content/themes/inrix/assets/images/placeholders/placeholder-9.jpg)",
          backgroundColor: 'black',
          minHeight: '100%',
          minWidth: '1024px',
          width: '100%',
          height: 'auto',
          backgroundRepeat: 'no-repeat',
          padding: '50px',
          backgroundPosition: 'fixed',
          fontFamily: 'Fredoka One, sans-serif',
      }}>
  
      <Col size="md-12">
              <h1 style={{
              background: 'rgb(52, 58, 64, 0.9)',
              textAlign: 'center',
              color: 'white',
              padding: '30px',
              margin: '100px 100px 10px 100px',
              textShadow: '2px 2px black',
              borderRadius:'10px',
              }}>
              Your Pets</h1>
            {this.state.Animals.length ? (
              <List>
                {this.state.Animals.map(Animal => (
                  <ListItem key={Animal._id}>
                    <Link to={"/Animals/" + Animal._id}>
                    <image> 
                      {Animal.Picture}
                    </image>
                      <strong>
                      Type: {Animal.Type}  Breed: {Animal.Breed}  added at  {Animal.date}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteAnimal(Animal._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 style={{
                color:'white',
                textAlign:'center',
                backgroundColor:'rgb(52,58,64,0.8)',
                margin: '0px 300px 0px 300px',
                borderRadius:'10px',
              }}>
              Add a pet to see here</h3>
            )}
          </Col>
        <Row>
          <Col size="md-12">          
              <h1 style={{
              background: 'rgb(52, 58, 64, 0.9)',
              textAlign: 'center',
              color: 'white',
              padding: '30px',
              margin: '100px 100px 10px 100px',
              textShadow: '2px 2px black',
              borderRadius:'10px',
              }}>
              Add a Pet
              </h1>
            <form style={{
              margin: '100px 100px 10px 100px',
            }}>
              <Input
                value={this.state.Type}
                onChange={this.handleInputChange}
                name="Type"
                placeholder="animal type (required)"
              />
              <Input
                value={this.state.Breed}
                onChange={this.handleInputChange}
                name="Breed"
                placeholder="breed (required)"
              />
              <TextArea
                value={this.state.Description}
                onChange={this.handleInputChange}
                name="Description"
                placeholder="description (optional)"
              />
              {/* <Input
                value={this.state.Zip}
                onChange={this.handleInputChange}
                name="Zip"
                placeholder="zipcode (required)"
              /> */}
              <Input
                value={this.state.Picture}
                onChange={this.handleInputChange}
                name="Picture"
                placeholder="picture (Optional)"
              />
              
              <FormBtn 
                disabled={!(this.state.Breed && this.state.Type)}
                onClick={this.handleFormSubmit}
              >
                submit animal
              </FormBtn>
            </form>
          </Col>
          
        </Row>
    
      </body>
      
    );
  }
}

export default Animals;