import React from "react";
import Workout from "./Workout";
import styled from "styled-components";
import List from "@material-ui/core/List";

const WorkoutListWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: white;
`;

const WorkoutList = props => {
  return (
    <WorkoutListWrapper>
      <List>
        {props.workouts.map(workout => {
          return (
            <Workout
              key={workout.id}
              workout={workout}
              numOfExercises={
                props.exercises.filter(exercise => {
                  return exercise.journalId === workout.id;
                }).length
              }
            />
          );
        })}
      </List>
    </WorkoutListWrapper>
  );
};

export default WorkoutList;
