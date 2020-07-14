import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import EmployeeData from "../../../containers/Employee/EmployeeData/EmployeeData";

const employeeCreate = (props) => (
  <Auxiliary>
    <h1 className="text-center">New Employee</h1>
    <EmployeeData type="create" {...props} />
  </Auxiliary>
);

export default employeeCreate;
