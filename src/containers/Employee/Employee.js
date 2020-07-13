import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import EmployeeList from "../../components/EmployeeList/EmployeeList";

class Employee extends Component {
  state = {
    employees: [
      { id: 1, name: "Leanne Graham" },
      { id: 2, name: "Leanne Graham" },
      { id: 3, name: "Leanne Graham" },
      { id: 4, name: "Leanne Graham" },
      { id: 5, name: "Leanne Graham" },
    ],
  };

  render() {
    return (
      <Auxiliary>
        <EmployeeList employees={this.state.employees} />
      </Auxiliary>
    );
  }
}

export default Employee;
