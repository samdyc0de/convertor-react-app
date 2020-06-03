import React, { Fragment } from "react";
import Longitude from "./components/Longitude";
import Mass from "./components/Mass";
import Litres from "./components/Litres";
import Nav from "./components/Nav";
import Home from "./components/Home";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Nav />
        <div className="container p-5">
          <Route path="/" exact component={Home} />
          <Route path="/Longitude" component={Longitude} />
          <Route path="/Mass" component={Mass} />
          <Route path="/Litres" component={Litres} />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
