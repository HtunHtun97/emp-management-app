import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import EmployeeData from "../../../containers/Employee/EmployeeData/EmployeeData";

const employeeEdit = (props) => {
  return (
    <Auxiliary>
      <h1 className="text-center">Update Employee</h1>
      <EmployeeData type="update" {...props} />
    </Auxiliary>
  );
};

export default employeeEdit;
