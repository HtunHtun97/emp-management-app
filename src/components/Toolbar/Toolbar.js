import React from "react";
import Navbar from "react-bootstrap/Navbar";
import empLogo from "../../assets/images/logo.svg";

const toolbar = (props) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <img
        alt=""
        src={empLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{" "}
      React Employee
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>Login</Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default toolbar;
