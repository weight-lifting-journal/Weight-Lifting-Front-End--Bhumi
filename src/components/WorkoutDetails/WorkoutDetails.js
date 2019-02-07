import React, { Component } from "react";
import { connect } from "react-redux";
import { getWorkouts, deleteExercise } from "../../store/actions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import JournalNavBar from "../Header/JournalNavBar";
import styled from "styled-components";
import ExerciseForm from "../Forms/ExerciseForm";

const ExercisesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 25px;
`;
const CardWrapper = styled.div`
  min-width: 300px;
  margin: 10px 20px;
`;

const DeleteBtn = styled.div`
  text-align: right;
`;

const EditBtn = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;

class WorkoutDetails extends Component {
  state = {
    isFormOpen: false
  };
  componentDidMount() {
    this.props.getWorkouts();
  }

  handleShowEdit = id => {
    this.setState({
      exercise: this.props.exercises.find(exercise => exercise.id === id),
      isFormOpen: true
    });
  };
  deleteExercise = (e, exercise) => {
    e.preventDefault();
    this.props.deleteExercise(exercise);
  };

  render() {
    const workout = this.props.workouts.find(workout => {
      return `${workout.id}` === this.props.match.params.id;
    });

    if (!workout) {
      return <h1>Workout not found</h1>;
    }

    const { id, region, date } = workout;
    const workoutExercises = this.props.exercises.filter(exercise => {
      return exercise.journalId === id;
    });

    return (
      <div>
        <JournalNavBar />
        <Typography variant="h4">{region}</Typography>
        <Typography gutterBottom component="p">
          {date}
        </Typography>

        {workoutExercises.length === 0 ? (
          "No exercises added"
        ) : (
          <ExercisesWrapper>
            {workoutExercises.map((exercise, index) => {
              return (
                <CardWrapper key={index}>
                  <Card>
                    <CardContent>
                      <DeleteBtn>
                        <Button
                          onClick={e => this.deleteExercise(e, exercise)}
                          size="small"
                          padding="0"
                          margin="0"
                          color="primary"
                        >
                          x
                        </Button>
                      </DeleteBtn>

                      <Typography gutterBottom variant="h5" component="h2">
                        {exercise.name}
                      </Typography>
                      <hr />
                      <Typography component="p">
                        Reps: {exercise.reps}
                      </Typography>
                      <Typography component="p">
                        Sets: {exercise.sets}
                      </Typography>
                      <Typography component="p">
                        Weights: {exercise.weight} lbs
                      </Typography>
                    </CardContent>
                    <EditBtn>
                      <Button
                        onClick={e => {
                          e.preventDefault();
                          this.handleShowEdit(exercise.id);
                        }}
                        size="small"
                        color="primary"
                      >
                        Edit
                      </Button>
                    </EditBtn>
                  </Card>
                </CardWrapper>
              );
            })}
          </ExercisesWrapper>
        )}
        {this.state.isFormOpen && (
          <ExerciseForm
            exercise={this.state.exercise}
            isUpdating={true}
            open={true}
            onClose={() => this.setState({ isFormOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workouts,
  exercises: state.exercises
});

export default connect(
  mapStateToProps,
  { getWorkouts, deleteExercise }
)(WorkoutDetails);
