import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import ProfilePictureCard from "../ProfilePictureCard/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Container> 

          <Row className="d-flex align-self-start my-5">
            <Col md="12">
              <Button className="btn btn-magick btn-lg btn3d">
                Portfolio
              </Button>
            </Col>
          </Row>

          <Row>     
            <Col md="12" className="d-flex justify-content-center align-items-center">   
              <Button className="btn btn-magick btn-lg btn3d mr-5">
                Vídeos
              </Button>
              <ProfilePictureCard />
              <Button className="btn btn-magick btn-lg btn3d ml-5">
                Contato
              </Button>
            </Col>
          </Row>

          <Row className="d-flex align-self-start my-5">
            <Col md="12">
              <Button className="btn btn-magick btn-lg btn3d">
                Sobre
              </Button>
            </Col>
          </Row>

        </Container>
      </div>
    </div>
  );
}

export default App;
