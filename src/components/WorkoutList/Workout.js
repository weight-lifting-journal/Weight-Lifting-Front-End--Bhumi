import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link as RouterLink } from "react-router-dom";

const Workout = props => {
  const { id, region, date } = props.workout;
  const { numOfExercises, deleteWorkout } = props;

  return (
    <ListItem
      button
      component={props => {
        return (
          <RouterLink to={`/workout/${id}`} {...props}>
            <ListItemText
              primary={`${region} (${numOfExercises})`}
              secondary={date}
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon onClick={e => deleteWorkout(e, id)} />
              </IconButton>
            </ListItemSecondaryAction>
          </RouterLink>
        );
      }}
    />
  );
};

export default Workout;