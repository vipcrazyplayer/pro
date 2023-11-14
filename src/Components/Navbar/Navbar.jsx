import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";

function Appbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <NavLink to="/">
          <Button variant="outline-dark">Home</Button>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto "
            style={{
              display: "flex",
              gap: "15%",
              width: "70%",
              margin: "0 0 0 40%",
            }}
          >
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Col>
            </Row>
            <NavLink to="/add">
              <Button variant="outline-dark">Add</Button>
            </NavLink>
            <NavLink to="/">
              <Button variant="outline-dark">Login</Button>
            </NavLink>
            <NavLink to="/">
              <Button variant="outline-dark">SignUp</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
