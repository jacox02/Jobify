<<<<<<< HEAD
import React from "react";
import Jobs from "./Components/JobsComponent";
import Cards from "./Components/cardComponent";
import "bootstrap/dist/css/bootstrap.min.css";
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent";
import HomeComponent from "./Components/HomeComponent";
import LoginComponent from "./Components/LoginComponent";
>>>>>>> 550b39c1f05b2b8fd81b6188c046ec4ee0ac74d8

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
      <Jobs></Jobs>
      <Cards></Cards>
=======
      <div>
        <NavbarComponent></NavbarComponent>
        <Router>
          <Switch>
            <Route path="/Login" render={() => <LoginComponent />}></Route>
            <Route path="/" exact component={HomeComponent} />
          </Switch>
        </Router>
      </div>
>>>>>>> 550b39c1f05b2b8fd81b6188c046ec4ee0ac74d8
    </div>
  );
}

export default App;
