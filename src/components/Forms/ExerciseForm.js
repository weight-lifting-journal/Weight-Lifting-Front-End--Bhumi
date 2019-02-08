import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { addExercise, updateExercise } from "../../store/actions";
import { connect } from "react-redux";

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.isUpdating ? props.exercise.name : "",
      sets: props.isUpdating ? props.exercise.sets : 0,
      reps: props.isUpdating ? props.exercise.reps : 0,
      weight: props.isUpdating ? props.exercise.weight : ""
    };
  }
  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.isUpdating) {
      this.props
        .updateExercise({
          ...this.state,
          journalId: this.props.exercise.journalId,
          id: this.props.exercise.id
        })
        .then(() => {
          this.setState({ name: "", sets: 0, reps: 0, weight: "" });
          this.handleClose();
        });
    } else {
      this.props
        .addExercise({
          ...this.state,
          journalId: Number(this.props.match.params.id)
        })
        .then(() => {
          this.setState({ name: "", sets: 0, reps: 0, weight: "" });
          this.handleClose();
        });
    }
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        open={this.props.open}
        maxWidth="xs"
      >
        <DialogTitle id="simple-dialog-title">
          {this.props.isUpdating ? "Edit Exercise" : "Create Exercise"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChanges}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="reps">Reps</InputLabel>
              <Input
                type="number"
                name="reps"
                value={this.state.reps}
                onChange={this.handleChanges}
                autoComplete="off"
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="sets">Sets</InputLabel>
              <Input
                type="number"
                name="sets"
                value={this.state.sets}
                onChange={this.handleChanges}
                autoComplete="off"
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="weight">Weight(lbs)</InputLabel>
              <Input
                type="number"
                name="weight"
                value={this.state.weight}
                onChange={this.handleChanges}
                autoComplete="off"
              />
            </FormControl>

            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                {this.props.isUpdating ? "Update" : "Add"}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}

export default connect(
  null,
  { addExercise, updateExercise }
)(ExerciseForm);
