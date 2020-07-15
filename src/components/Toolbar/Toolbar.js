import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import empLogo from "../../assets/images/logo.svg";
import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <Navbar bg="dark" variant="dark" className="fixed-top">
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
      {!props.session.isLoggedIn ? (
        <NavLink exact className={classes.NavLink} to="/login">
          Login
        </NavLink>
      ) : (
        <NavLink
          className={classes.NavLink}
          to="/login"
          onClick={props.handleLogout}
        >
          Logout
        </NavLink>
      )}
    </Navbar.Collapse>
  </Navbar>
);

export default toolbar;
