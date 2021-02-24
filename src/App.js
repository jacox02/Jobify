import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./Components/NavbarComponent";
import PostulateComponent from "./Components/PostulateComponent";
import WDetailsComponent from "./Components/WDetailsComponent";
import Jobs from "./Components/JobsComponent";
import PostJobComponent from "./Components/PostJobComponent";
import WorkList from "./Components/WorkList";
import NotFoundComponent from "./Components/NotFoundComponent";
import LoginComponent from "./Components/LoginComponent";

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
          <Route path="/login" component={LoginComponent}></Route>
          <Route
            path="/AddOffer"
            component={withAuthenticationRequired(PostJobComponent)}
          />
          <Route
            path="/Works/:id/Postulate"
            component={withAuthenticationRequired(PostulateComponent)}
          ></Route>
          <Route
            path="/Works/:ownermail/List"
            component={withAuthenticationRequired(WorkList)}
          ></Route>
          <Route exact path="/" component={Jobs}></Route>
          <Route component={NotFoundComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
