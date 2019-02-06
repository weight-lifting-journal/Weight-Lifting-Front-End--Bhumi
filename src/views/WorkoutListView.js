import React from "react";
import NavBar from "../components/Header/NavBar";
import { connect } from "react-redux";
import { getWorkouts, deleteWorkout } from "../store/actions";
import WorkoutList from "../components/WorkoutList/WorkoutList";

class WorkoutListView extends React.Component {
  componentDidMount() {
    this.props.getWorkouts();
  }

  deleteWorkout = (e, id) => {
    e.preventDefault();
    this.props.deleteWorkout(id);
  };

  render() {
    return (
      <div>
        <NavBar />
        <WorkoutList
          workouts={this.props.workouts}
          exercises={this.props.exercises}
          deleteWorkout={this.deleteWorkout}
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
  { getWorkouts, deleteWorkout }
)(WorkoutListView);
