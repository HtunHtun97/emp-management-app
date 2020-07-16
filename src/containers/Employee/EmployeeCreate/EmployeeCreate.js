import React, { Component } from "react";
import axios from "../../../axios-employees";
import { checkValidity } from "../../../utils/validation";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Toast from "../../../components/UI/Toast/Toast";
import Spinner from "../../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import EmployeeForm from "../../../components/Employee/EmployeeForm/EmployeeForm";

class EmployeeCreate extends Component {
  state = {
    empForm: {
      name: {
        label: "Full Name",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Full Name",
          id: "fullname",
        },
        value: "",
        validation: {
          required: true,
          maxLength: 255,
        },
        valid: false,
        touched: false,
      },
      username: {
        label: "Username",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Username",
          id: "username",
        },
        value: "",
        validation: {
          required: true,
          maxLength: 255,
        },
        valid: false,
        touched: false,
      },
      email: {
        label: "Email",
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
          id: "email",
        },
        value: "",
        validation: {
          required: true,
          maxLength: 255,
        },
        valid: false,
        touched: false,
      },
      phone: {
        label: "Phone No",
        elementType: "input",
        elementConfig: {
          type: "tel",
          placeholder: "(123)456-7890",
          id: "phone",
        },
        value: "",
        validation: {
          required: true,
          pattern: new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/),
          maxLength: 255,
        },
        valid: false,
        touched: false,
      },
      website: {
        label: "Web Page",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Web Page",
          id: "website",
        },
        value: "",
        validation: {
          required: true,
          maxLength: 255,
        },
        valid: false,
        touched: false,
      },
    },
    isFormValid: false,
    showMessage: false,
    message: null,
    loading: false,
  };

  inputChangedHandler = (event, inputId) => {
    const updatedEmpForm = { ...this.state.empForm };
    const updatedFormElement = { ...updatedEmpForm[inputId] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedEmpForm[inputId] = updatedFormElement;
    let isFormValid = true;
    for (let inputElement in updatedEmpForm) {
      isFormValid = updatedEmpForm[inputElement].valid && isFormValid;
    }
    this.setState({ empForm: updatedEmpForm, isFormValid: isFormValid });
  };

  employeeCreatedHandler = (event) => {
    this.setState({ loading: true });
    event.preventDefault();
    const empData = {};

    for (let formElementId in this.state.empForm) {
      empData[formElementId] = this.state.empForm[formElementId].value;
    }

    axios
      .post("/users", empData)
      .then((response) => {
        console.log(response);
        this.setState({ showMessage: true, message: "Successfully created" });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  backToPreviousHandler = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  };

  alertCloseHandler = () => {
    this.setState({ loading: false, showMessage: false });
    this.props.history.replace("/employee");
  };

  render() {
    let message = this.state.showMessage ? (
      <Toast message={this.state.message} closed={this.alertCloseHandler} />
    ) : null;
    let employee = this.state.loading ? (
      <Spinner />
    ) : (
      <EmployeeForm
        formType="Create"
        formData={this.state.empForm}
        isFormValid={this.state.isFormValid}
        submitted={this.employeeCreatedHandler}
        backClicked={this.backToPreviousHandler}
        inputChanged={this.inputChangedHandler}
      />
    );

    return (
      <Auxiliary>
        {message}
        <h1 className="text-center">New Employee</h1>
        {employee}
      </Auxiliary>
    );
  }
}

export default withErrorHandler(EmployeeCreate, axios);
