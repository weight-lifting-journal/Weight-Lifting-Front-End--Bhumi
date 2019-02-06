import React, { Component } from "react";
import WorkoutListView from "./views/WorkoutListView";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import WorkoutDetails from "./components/WorkoutDetails/WorkoutDetails";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/workouts" component={WorkoutListView} />
        <Route exact path="/workout/:id" component={WorkoutDetails} />
      </div>
    );
  }
}

export default App;
