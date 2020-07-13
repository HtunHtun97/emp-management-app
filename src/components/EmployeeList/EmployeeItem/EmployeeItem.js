import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const employeeItem = (props) => (
  <ListGroup.Item as="li">{props.label}</ListGroup.Item>
);

export default employeeItem;
