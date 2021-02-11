import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./Components/NavbarComponent";
import WDetailsComponent from "./Components/WDetailsComponent";
import Jobs from "./Components/JobsComponent";
import PostJobComponent from "./Components/PostJobComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Router>
        <Switch>
          <Route
            path="/Works/:id/Details"
            component={WDetailsComponent}
          ></Route>

          <Route
            path="/AddOffer"
            component={withAuthenticationRequired(PostJobComponent)}
          />

          <Route exact path="/" component={Jobs}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
