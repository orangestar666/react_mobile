import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";
import "./style/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/Cart" render={() => <Cart />} />
          <Route path="/Mine" render={() => <Mine />} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
