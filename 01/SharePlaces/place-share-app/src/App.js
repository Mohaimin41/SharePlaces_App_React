import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

import Users from "./users/pages/users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
