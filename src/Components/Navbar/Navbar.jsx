import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./navbar.module.css";

import { NavLink } from "react-router-dom";

function Appbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <NavLink className={style.bar} to="/">
          Home
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
            <NavLink className={style.bar} to="/add">
              Add
            </NavLink>
            <NavLink className={style.bar} to="/">
              Login
            </NavLink>
            <NavLink className={style.bar} to="/">
              SignUp
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
