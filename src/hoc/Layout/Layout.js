import React, {Component} from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Toolbar/Toolbar";
import Employee from "../../containers/Employee/Employee";

class Layout extends Component {
  render () {
    return (
      <Auxiliary>
        <Toolbar />
        <Employee />
      </Auxiliary>
    );
  }
}

export default Layout;