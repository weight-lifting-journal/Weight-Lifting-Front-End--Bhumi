import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NavBar from "../Header/NavBar";
import styled from "styled-components";

const ExercisesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const CardWrapper = styled.div`
  min-width: 300px;
  margin: 20px;
`;
const workouts = [
  {
    id: 1,
    workout: {
      date: "Feb 12, 2019",
      region: "Upper Body"
    },
    exercises: [
      {
        exerciseId: 1,
        journalId: 1,
        name: "Bench Press",
        weight: "200lb",
        reps: 5,
        sets: 3
      },
      {
        exerciseId: 2,
        journalId: 1,
        name: "Biceps Curls",
        weight: "60lb",
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    id: 2,
    workout: {
      date: "Feb 13, 2019",
      region: "Legs"
    },
    exercises: [
      {
        exerciseId: 3,
        journalId: 2,
        name: "Leg Press",
        weight: "280lb",
        reps: 7,
        sets: 3
      },
      {
        exerciseId: 4,
        journalId: 2,
        name: "Squats",
        weight: "180lb",
        reps: 12,
        sets: 3
      }
    ]
  }
];
export default class WorkoutDetailsPage extends Component {
  // componentDidMount = () => {
  //   this.props.fetchWorkout(this.props.match.params.id)
  // }

  render() {
    const { id } = this.props.match.params;
    const workout = workouts.find(workout => {
      return `${workout.id}` === id;
    });
    return (
      <div>
        <NavBar />
        <Typography gutterBottom variant="h4">
          {workout.workout.region}
        </Typography>
        <Typography gutterBottom variant="h6">
          {workout.workout.date}
        </Typography>
        <ExercisesWrapper>
          {workout.exercises.map(exercise => {
            return (
              <CardWrapper>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {exercise.name}
                    </Typography>
                    <hr />
                    <Typography component="p">
                      Weight: {exercise.weight}
                    </Typography>
                    <Typography component="p">Sets: {exercise.sets}</Typography>
                    <Typography component="p">Reps: {exercise.reps}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </CardWrapper>
            );
          })}
        </ExercisesWrapper>
      </div>
    );
  }
}
