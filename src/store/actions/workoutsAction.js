import axios from "axios";

export const FETCHING_WORKOUTS = "FETCHING_WORKOUTS";
export const FETCHING_WORKOUTS_SUCCESS = "FETCHING_WORKOUTS_SUCCESS";
export const FETCHING_WORKOUTS_FAILURE = "FETCHING_WORKOUTS_FAILURE";
export const DELETE_WORKOUTS_START = "DELETE_WORKOUTS_START";
export const DELETE_WORKOUTS_SUCCESS = "DELETE_WORKOUTS_SUCCESS";
export const DELETE_WORKOUTS_FAILURE = "DELETE_WORKOUTS_FAILURE";

const FAKE_RESPONSE = {
  journalsObj: [
    {
      id: 1,
      date: "Feb 12, 2019",
      region: "upper body"
    },
    {
      id: 5,
      date: "Feb 13, 2019",
      region: "legs"
    },
    {
      id: 9,
      date: "Feb 14, 2019",
      region: "legs"
    },
    {
      id: 13,
      date: "Feb 20",
      region: "upper body"
    }
  ],
  exerciseCards: [
    {
      journalId: 1,
      name: "bench press",
      reps: 12,
      sets: 3,
      weight: "190lbs"
    },
    {
      journalId: 1,
      name: "curls",
      reps: 15,
      sets: 3,
      weight: "60lbs"
    },
    {
      journalId: 5,
      name: "leg press",
      reps: 12,
      sets: 3,
      weight: "250lbs"
    },
    {
      journalId: 2,
      name: "squats",
      reps: 25,
      sets: 5,
      weight: "150lbs"
    }
  ]
};

export const getWorkouts = () => dispatch => {
  dispatch({ type: FETCHING_WORKOUTS });

  axios
    .get("https://weightliftingjournallambda.herokuapp.com/workouts", {
      headers: { Authorization: localStorage.getItem("jwt") }
    })
    .then(response => {
      dispatch({
        type: FETCHING_WORKOUTS_SUCCESS,
        payload: FAKE_RESPONSE
      });
    })
    .catch(err => dispatch({ type: FETCHING_WORKOUTS_FAILURE, payload: err }));
};
