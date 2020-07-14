import React, { Component } from "react";
import classes from "./EmployeeData.module.css";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

class EmployeeData extends Component {
  state = {
    empForm: {
      name: {
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
    },
  };

  backToPreviousHandler = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    const formElementsArray = [];

    for (let key in this.state.empForm) {
      formElementsArray.push({
        id: key,
        config: this.state.empForm[key],
      });
    }

    let form = (
      <form>
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
            />
          );
        })}
        <Button btnType="Default" clicked={this.backToPreviousHandler}>BACK</Button>
        <Button btnType="Success">
          {this.props.type === "create" ? "CREATE" : "UPDATE"}
        </Button>
      </form>
    );
    return <div className={classes.EmployeeData}>{form}</div>;
  }
}

export default EmployeeData;
