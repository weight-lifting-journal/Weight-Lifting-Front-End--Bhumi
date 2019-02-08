import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link as RouterLink } from "react-router-dom";

const Workout = props => {
  const { id, region, date } = props.workout;
  const { numOfExercises, deleteWorkout, showEditForm } = props;

  return (
    <ListItem
      button
      component={listItemProps => {
        return (
          <RouterLink to={`/workout/${id}`} {...listItemProps}>
            <ListItemText
              primary={`${region} (${numOfExercises})`}
              secondary={date}
            />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Edit"
                onClick={e => {
                  e.preventDefault();
                  showEditForm(id);
                }}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                aria-label="Delete"
                onClick={e => deleteWorkout(e, id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </RouterLink>
        );
      }}
    />
  );
};

export default Workout;
