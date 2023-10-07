import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home/home";
import Login from "./Auth/login";
import Register from "./Auth/register";
import ProfilePage from "./Auth/ProfilePage";

//import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />            
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/ProfilePage" component={ProfilePage} />

        </Switch>
      </Router>
    );
  }
}