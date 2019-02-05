import React from "react";

const Workout = props => {
  const { workout, exercises, id } = props.workout;

  return <div className="exercise-card">{workout.name}</div>;
};

export default Workout;
