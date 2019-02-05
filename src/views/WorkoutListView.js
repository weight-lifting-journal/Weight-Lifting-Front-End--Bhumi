import React from "react";
//import { connect } from "react-redux";
//import { getExercises } from "../store/actions";
import WorkoutList from "../components/Home/WorkoutList";

class WorkoutListView extends React.Component {
  componentDidMount() {
    this.props.getExercises();
  }

  render() {
    console.log(this.props);
    return <WorkoutList workouts={this.props.workouts} />;
  }
}

const mapStateToProps = state => ({
  workouts: [
    {
      id: 1,
      workout: {
        date: "Feb 12, 2019",
        region: "Upper Body"
      },
      exercises: [
        {
          exerciseId: 1,
          journalId: 1,
          name: "bench press",
          weight: "200lb",
          reps: 5,
          sets: 3
        },
        {
          exerciseId: 2,
          journalId: 1,
          name: "curls",
          weight: "60lb",
          reps: 10,
          sets: 3
        }
      ]
    },
    {
      id: 2,
      workout: {
        date: "Feb 13, 2019",
        region: "legs"
      },
      exercises: [
        {
          exerciseId: 3,
          journalId: 2,
          name: "leg press",
          weight: "280lb",
          reps: 7,
          sets: 3
        },
        {
          exerciseId: 4,
          journalId: 2,
          name: "squats",
          weight: "180lb",
          reps: 12,
          sets: 3
        }
      ]
    }
  ]
});

// export default connect(
//   mapStateToProps,
//   {}
// )(WorkoutListView);

export default WorkoutListView;
