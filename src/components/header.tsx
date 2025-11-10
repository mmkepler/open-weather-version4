import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/weather-icons.min.css"

export default function header() {
  return (
    <Navbar id="header">
      <Container>
        <Navbar id="navbar">
          <Nav id="nav">
            <Navbar.Brand href="#home">
              <i className="wi wi-sunrise"></i>
              &nbsp;Weather 
            </Navbar.Brand>
              <Form>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="City, Full State or zipcode"
                    aria-label="City, Full State or zipcode"
                    aria-describedby="basic-addon2"
                    required
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </Nav>
        </Navbar>
      </Container>
    </Navbar>
  )
}
