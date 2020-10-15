import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import ItemsDetails from "./ItemsDetails";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/items/:itemID">
          <ItemsDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
