import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";
import GoodsDetail from "./pages/GoodsDetail";
import MyLayOut from "./components/MyLayOut";
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
          <Route
            exact
            path="/"
            render={props => (
              <MyLayOut {...props}>
                <Home />
              </MyLayOut>
            )}
          />
          <Route
            path="/Cart"
            render={props => (
              <MyLayOut {...props}>
                <Cart />
              </MyLayOut>
            )}
          />
          <Route
            path="/Mine"
            render={props => (
              <MyLayOut {...props}>
                <Mine />
              </MyLayOut>
            )}
          />
          {/* 商品详情 */}
          <Route path="/GoodsDetail/:id" component={GoodsDetail} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
