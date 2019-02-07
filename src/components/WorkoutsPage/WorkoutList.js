import React from "react";
import Workout from "./Workout";
import styled from "styled-components";
import List from "@material-ui/core/List";
import WorkoutsForm from "../Forms/WorkoutsForm";
import Loader from "react-loader-spinner";

const WorkoutListWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: white;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100 %;
`;

class WorkoutList extends React.Component {
  state = {
    isFormOpen: false
  };

  handleShowEdit = id => {
    this.setState({
      workout: this.props.workouts.find(workout => workout.id === id),
      isFormOpen: true
    });
  };

  render() {
    if (this.props.isFetchingWorkouts) {
      return (
        <LoaderWrapper>
          <Loader type="TailSpin" color="#00BFFF" height="50" width="50" />
        </LoaderWrapper>
      );
    }

    return (
      <>
        {this.props.workouts.length === 0 ? (
          "No journal entries added"
        ) : (
          <WorkoutListWrapper>
            <List>
              {this.props.workouts.map(workout => {
                return (
                  <Workout
                    key={workout.id}
                    workout={workout}
                    deleteWorkout={this.props.deleteWorkout}
                    showEditForm={this.handleShowEdit}
                    numOfExercises={
                      this.props.exercises.filter(exercise => {
                        return exercise.journalId === workout.id;
                      }).length
                    }
                  />
                );
              })}
            </List>
          </WorkoutListWrapper>
        )}
        {this.state.isFormOpen && (
          <WorkoutsForm
            workout={this.state.workout}
            isUpdating={true}
            open={true}
            onClose={() => this.setState({ isFormOpen: false })}
          />
        )}
      </>
    );
  }
}
export default WorkoutList;
