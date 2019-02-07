import React, { Component } from "react";
import WorkoutsPage from "./components/WorkoutsPage/WorkoutsPage";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import ExercisePage from "./components/ExercisePage/ExercisePage";
import { Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import appBackground from "./components/img/appBackground.png";

const AppWrapper = styled.div`
  background-image: url(${appBackground});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  text-align: center;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <AppWrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/workouts" component={WorkoutsPage} />
        <Route exact path="/workout/:id" component={ExercisePage} />
      </AppWrapper>
    );
  }
}

export default App;
