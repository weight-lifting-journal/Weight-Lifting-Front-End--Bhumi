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
          return <Workout key={workout.id} workout={workout} />;
        })}
      </List>
    </WorkoutListWrapper>
  );
};

export default WorkoutList;
