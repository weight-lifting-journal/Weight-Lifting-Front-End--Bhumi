import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link as RouterLink } from "react-router-dom";
// import FolderIcon from "@material-ui/icons/Folder";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";

const Workout = props => {
  const { id, region, date } = props.workout;
  const { numOfExercises } = props;

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
