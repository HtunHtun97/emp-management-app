import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Employees from "./containers/Employee/Employees";
import EmployeeCreate from "./containers/Employee/EmployeeCreate/EmployeeCreate";
import EmployeeUpdate from "./containers/Employee/EmployeeUpdate/EmployeeUpdate";
import Layout from "./hoc/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Layout>
        <Redirect from="/" to="/login" />
        <Switch>
          <Route path="/employee" exact component={Employees} />
          <Route path="/employee/new" component={EmployeeCreate} />
          <Route path="/employee/:id" component={EmployeeUpdate} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
