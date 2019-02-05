import React from "react";
import Workout from "./Workout";

const WorkoutList = props => {
  return (
    <div>
      {props.workouts.map(workout => {
        return <Workout key={workout.id} workout={workout} />;
      })}
    </div>
  );
};

export default WorkoutList;
