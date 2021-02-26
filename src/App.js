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
import CPanelComponent from "./Components/CPanelComponents"

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
            component={PostJobComponent}
          />
          <Route
            path="/Works/:id/Postulate"
            component={PostulateComponent}
          ></Route>
          <Route
            path="/Works/:ownermail/List"
            component={WorkList}
          ></Route>
          <Route
            path="/WorksQuantity"
            component={CPanelComponent}
          ></Route>
          <Route exact path="/" component={Jobs}></Route>
          <Route component={NotFoundComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
