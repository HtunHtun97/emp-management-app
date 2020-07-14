import React, { Component } from "react";
import axios from "../../../axios-employees";
import classes from "./EmployeeData.module.css";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

class EmployeeData extends Component {
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
        },
        valid: false,
        touched: false,
      },
    },
    isFormValid: false,
    loading: false,
  };

  componentDidMount() {
    if (this.props.type === "update") {
      axios
        .get("/users/" + this.props.match.params.id)
        .then((response) => {
          const updatedEmpForm = { ...this.state.empForm };
          for (let inputElement in updatedEmpForm) {
            updatedEmpForm[inputElement].value = response.data[inputElement];
            updatedEmpForm[inputElement].valid = true;
          }
          this.setState({ empForm: updatedEmpForm });
        })
        .catch((error) => {
          this.setState({ loading: false });
        });
    }
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (event, inputId) => {
    const updatedEmpForm = { ...this.state.empForm };
    const updatedFormElement = { ...updatedEmpForm[inputId] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
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

  createEmpHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const empData = {};
    for (let formElementId in this.state.empForm) {
      empData[formElementId] = this.state.empForm[formElementId].value;
    }
    if (this.props.type === "update") {
      axios
        .put("/users/" + this.props.match.params.id, empData)
        .then((response) => {
          this.setState({ loading: false });
          console.log(response);
          this.props.history.push("/");
        })
        .catch((error) => {
          this.setState({ loading: false });
        });
    } else {
      axios
        .post("/users", empData)
        .then((response) => {
          this.setState({ loading: false });
          console.log(response);
          this.props.history.push("/");
        })
        .catch((error) => {
          this.setState({ loading: false });
        });
    }
  };

  backToPreviousHandler = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.empForm) {
      formElementsArray.push({
        id: key,
        config: this.state.empForm[key],
      });
    }

    let form = (
      <form onSubmit={this.createEmpHandler}>
        {formElementsArray.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              label={formElement.config.label}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
            />
          );
        })}
        <Button btnType="Default" clicked={this.backToPreviousHandler}>
          BACK
        </Button>
        <Button btnType="Success" disabled={!this.state.isFormValid}>
          {this.props.type === "create" ? "CREATE" : "UPDATE"}
        </Button>
      </form>
    );
    return <div className={classes.EmployeeData}>{form}</div>;
  }
}

export default withErrorHandler(EmployeeData, axios);
