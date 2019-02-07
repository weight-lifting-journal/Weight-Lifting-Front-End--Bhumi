import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { addWorkout, updateWorkout } from "../../store/actions";
import { connect } from "react-redux";

class WorkoutsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: props.isUpdating ? props.workout.region : "",
      date: props.isUpdating ? props.workout.date : ""
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
        .updateWorkout({
          ...this.state,
          id: this.props.workout.id
        })
        .then(() => {
          this.setState({ region: "", date: "" });
          this.handleClose();
        });
    } else {
      this.props.addWorkout(this.state).then(() => {
        this.setState({ region: "", date: "" });
        this.handleClose();
      });
    }
  };

  handleClose = () => {
    this.setState({ region: "", date: "" });
    this.props.onClose();
  };

  render() {
    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        open={this.props.open}
      >
        <DialogTitle id="simple-dialog-title">
          {this.props.isUpdating
            ? "Edit Workout Journal"
            : "Create Workout Journal"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="region">Region</InputLabel>
              <Input
                type="text"
                name="region"
                value={this.state.region}
                onChange={this.handleChanges}
                autoComplete="off"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <Input
                name="date"
                value={this.state.date}
                onChange={this.handleChanges}
                type="date"
                autoComplete="current-date"
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
  { addWorkout, updateWorkout }
)(WorkoutsForm);
