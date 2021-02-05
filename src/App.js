import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./Components/NavbarComponent";
import WDetailsComponent from "./Components/WDetailsComponent";
import Jobs from "./Components/JobsComponent";
import CategoriesComponent from "./Components/CategoryComponent";
import AllCategoriesComponent from "./Components/AllJobsCategory";
import PostJobComponent from "./Components/PostJobComponent";

function App(props) {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Router>
        <Switch>
          <Route
            path="/Works/:id/Details"
            component={WDetailsComponent}
          ></Route>
          {/*<Route path="/AddOffer" component={PostJobComponent}></Route>*/}
          <Route
            path="/AddOffer"
            component={withAuthenticationRequired(PostJobComponent)}
          />
          <Route path="/Works/:id/List" component={CategoriesComponent}></Route>
          <Route
            path="/Works/:id/All"
            component={AllCategoriesComponent}
          ></Route>

          <Route exact path="/" component={Jobs}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
