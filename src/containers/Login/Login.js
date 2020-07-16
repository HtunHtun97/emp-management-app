import React, { Component } from "react";
import classes from "./Login.module.css";
import { checkValidity } from "../../utils/validation";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

class Login extends Component {
  state = {
    loginForm: {
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
      password: {
        label: "Password",
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
          id: "password",
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
  };

  loginHandler = (e) => {
    e.preventDefault();
    const userData = {};
    for (let formElementId in this.state.loginForm) {
      userData[formElementId] = this.state.loginForm[formElementId].value;
    }
    this.props.handleLogin(userData);
  };

  inputChangedHandler = (event, inputId) => {
    const updatedLoginForm = { ...this.state.loginForm };
    const updatedFormElement = { ...updatedLoginForm[inputId] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedLoginForm[inputId] = updatedFormElement;
    let isFormValid = true;
    for (let inputElement in updatedLoginForm) {
      isFormValid = updatedLoginForm[inputElement].valid && isFormValid;
    }
    this.setState({ loginForm: updatedLoginForm, isFormValid: isFormValid });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }

    let form = (
      <form onSubmit={this.loginHandler}>
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
        <Button btnType="Success" disabled={!this.state.isFormValid}>
          LOGIN
        </Button>
      </form>
    );
    let errorMessage =
      this.props.session.loginToken === "invalid" ? (
        <div style={{ textAlign: "center", color: "red" }}>
          Username or password is incorrect!
        </div>
      ) : null;
    return (
      <Auxiliary>
        <div className={classes.Login}>
          <h1 className="text-center">Please Login</h1>
          {errorMessage}
          {form}
        </div>
      </Auxiliary>
    );
  }
}

export default Login;
