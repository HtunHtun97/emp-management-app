import React from "react";
import Toast from "react-bootstrap/Toast";
import classes from "./Toast.module.css";

const toast = (props) => (
  <div className={classes.Toast}>
    <Toast onClose={props.closed} delay={2000} autohide>
      <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  </div>
);

export default toast;
