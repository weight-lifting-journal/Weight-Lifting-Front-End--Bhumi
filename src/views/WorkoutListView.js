import React from "react";
import NavBar from "../components/Header/NavBar";
import { connect } from "react-redux";
import { getWorkouts } from "../store/actions";
import WorkoutList from "../components/WorkoutList/WorkoutList";

class WorkoutListView extends React.Component {
  componentDidMount() {
    this.props.getWorkouts();
  }

  render() {
    return (
      <div>
        <NavBar />
        <WorkoutList
          workouts={this.props.workouts}
          exercises={this.props.exercises}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts,
  exercises: state.exercises
});

export default connect(
  mapStateToProps,
  { getWorkouts }
)(WorkoutListView);
