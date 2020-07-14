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

  employeeClickedHandler = (id) => {
    this.props.history.push({
      pathname: "/employee/" + id,
    });
  };

  employeeCreateHandler = () => {
    this.props.history.push("/employee/new");
  };

  render() {
    return (
      <Auxiliary>
        <EmployeeList
          employees={this.state.employees}
          onEmployeeClick={this.employeeClickedHandler}
          onEmployeeCreate={this.employeeCreateHandler}
        />
      </Auxiliary>
    );
  }
}

export default Employee;
