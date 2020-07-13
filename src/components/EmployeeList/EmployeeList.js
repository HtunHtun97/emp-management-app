import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import classes from "./EmployeeList.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const employeeList = (props) => {
  let employees = props.employees.map((emp) => {
    return (
      <ListGroup.Item as="li" key={emp.id} className={classes.EmpItem} onClick={() =>props.employeeClicked(emp.id)}>
        {emp.name}
      </ListGroup.Item>
    );
  });
  return (
    <Auxiliary>
      <h1 className="text-center">Employee List</h1>
      <div className="d-flex mt-3">
        <div className="p-2 mt-3">5 employees</div>
        <div className="ml-auto p-2">
          <Button>New Employee</Button>
        </div>
      </div>
      <ListGroup as="ul">{employees}</ListGroup>
    </Auxiliary>
  );
};

export default employeeList;
