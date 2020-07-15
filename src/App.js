import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Employee from "./containers/Employee/Employee";
import EmployeeList from "./components/EmployeeList/EmployeeEdit/EmployeeEdit";
import employeeCreate from "./components/EmployeeList/EmployeeCreate/EmployeeCreate";
import Layout from "./hoc/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Layout>
        <Redirect from="/" to="/login" />
        <Switch>
          <Route path="/employee" exact component={Employee} />
          <Route path="/employee/new" component={employeeCreate} />
          <Route
            path="/employee/:id"
            render={(props) => <EmployeeList {...props} />}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
