import React from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from "./EmployeeForm.module.css";

const employeeForm = (props) => {
  const formElementsArray = [];

  for (let key in props.formData) {
    formElementsArray.push({
      id: key,
      config: props.formData[key],
    });
  }
  let form = (
    <form onSubmit={props.submitted}>
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
            changed={(event) => props.inputChanged(event, formElement.id)}
          />
        );
      })}
      <div className="d-flex">
        <Button btnType="Default" clicked={props.backClicked}>
          BACK
        </Button>
        <Button btnType="Success" disabled={!props.isFormValid}>
          {props.formType === "Create" ? "CREATE" : "UPDATE"}
        </Button>
        <div className="ml-auto p-2">
          {props.formType === "Update" ? (
            <p
              style={{ cursor: "pointer" }}
              className="text-danger text-right pt-3"
              onClick={props.deleted}
            >
              Delete employee
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
  return <div className={classes.EmployeeForm}>{form}</div>;
};

export default employeeForm;
