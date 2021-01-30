import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./Components/NavbarComponent";
import HomeComponent from "./Components/HomeComponent";
import LoginComponent from "./Components/LoginComponent";
import WorkDetailSComponents from "./Components/WorkDetailSComponents";

function App() {
  return (
    <div className="App">
      <div>
        <NavbarComponent></NavbarComponent>
        <Router>
          <Switch>
            <Route path="/Login" render={() => <LoginComponent />}></Route>
            <Route
              path="/Works/:id/Details"
              render={() => <WorkDetailSComponents />}
            ></Route>
            <Route path="/" exact component={HomeComponent} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
