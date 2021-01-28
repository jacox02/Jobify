
import React from "react";
import Jobs from "./Components/JobsComponent";
import Cards from "./Components/cardComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent";
import HomeComponent from "./Components/HomeComponent";
import LoginComponent from "./Components/LoginComponent";


function App() {
  return (
    <div className="App">

      <div>
        <NavbarComponent></NavbarComponent>
        <Router>
          <Switch>
            <Route path="/Login" render={() => <LoginComponent />}></Route>
            <Route path="/" exact component={HomeComponent} />
          </Switch>
        </Router>
      </div>

    </div>
  );
}

export default App;
