import React, { Component } from "react";
import axios from "../../axios-employees";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import Spinner from "../../components/UI/Spinner/Spinner";
import Pagniator from "../../components/UI/Paginator/Paginator";

class Employee extends Component {
  state = {
    employees: [[]],
    total: 0,
    itemsPerPage: 5,
    itemsCount: 0,
    activePage: 1,
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("/users")
      .then((response) => {
        let res = response.data.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
        res = this.chunkData(res, this.state.itemsPerPage);
        let itemsCount = Math.ceil(
          response.data.length / this.state.itemsPerPage
        );
        this.setState({
          employees: res,
          total: response.data.length,
          itemsCount: itemsCount,
        });
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
        this.setState({ error: true });
      });
  }

  chunkData = (data, chunkSize) => {
    var newData = [];
    for (var i = 0; i < data.length; i += chunkSize)
      newData.push(data.slice(i, i + chunkSize));
    return newData;
  };

  employeeClickedHandler = (id) => {
    this.props.history.push({
      pathname: "/employee/" + id,
    });
  };

  employeeCreateHandler = () => {
    this.props.history.push("/employee/new");
  };

  itemClickedHandler = (value) => {
    this.setState({ activePage: value });
  };

  render() {
    let employees = this.state.error ? (
      <p>The employees can't be loaded.</p>
    ) : (
      <Spinner />
    );

    if (!this.state.loading) {
      employees = (
        <Auxiliary>
          <EmployeeList
            employees={this.state.employees}
            total={this.state.total}
            activePage={this.state.activePage}
            onEmployeeClick={this.employeeClickedHandler}
            onEmployeeCreate={this.employeeCreateHandler}
          />
          <Pagniator
            prev="true"
            next="true"
            items={this.state.itemsCount}
            activeItem={this.state.activePage}
            clicked={this.itemClickedHandler}
          />
        </Auxiliary>
      );
    }
    return employees;
  }
}

export default withErrorHandler(Employee, axios);
