import React from "react";
import JournalNavBar from "../components/Header/JournalNavBar";
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
        <JournalNavBar />
        <WorkoutList
          workouts={this.props.workouts}
          exercises={this.props.exercises}
          deleteWorkout={this.deleteWorkout}
          isFetchingWorkouts={this.props.isFetchingWorkouts}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts,
  exercises: state.exercises,
  isFetchingWorkouts: state.isFetchingWorkouts
});

export default connect(
  mapStateToProps,
  { getWorkouts, deleteWorkout }
)(WorkoutListView);
