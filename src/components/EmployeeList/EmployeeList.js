import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import EmployeeItem from "./EmployeeItem/EmployeeItem";

const employeeList = (props) => {
  let employees = props.employees.map((emp) => {
    return <EmployeeItem key={emp.id} label={emp.name} />;
  });
  return <ListGroup as="ul">{employees}</ListGroup>;
};

export default employeeList;
