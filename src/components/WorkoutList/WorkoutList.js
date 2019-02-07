import React from "react";
import Workout from "./Workout";
import styled from "styled-components";
import List from "@material-ui/core/List";
import WorkoutsForm from "../Forms/WorkoutsForm";

const WorkoutListWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: white;
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
    return (
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
        {this.state.isFormOpen && (
          <WorkoutsForm
            workout={this.state.workout}
            isUpdating={true}
            open={true}
            onClose={() => this.setState({ isFormOpen: false })}
          />
        )}
      </WorkoutListWrapper>
    );
  }
}
export default WorkoutList;
