import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from"./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/bubble-page" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
