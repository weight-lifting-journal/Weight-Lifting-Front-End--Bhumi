import axios from "axios";

export const FETCHING_WORKOUTS = "FETCHING_WORKOUTS";
export const FETCHING_WORKOUTS_SUCCESS = "FETCHING_WORKOUTS_SUCCESS";
export const FETCHING_WORKOUTS_FAILURE = "FETCHING_WORKOUTS_FAILURE";
export const DELETE_WORKOUTS_START = "DELETE_WORKOUTS_START";
export const DELETE_WORKOUTS_SUCCESS = "DELETE_WORKOUTS_SUCCESS";
export const DELETE_WORKOUTS_FAILURE = "DELETE_WORKOUTS_FAILURE";

const baseUrl = "https://weightliftingjournallambda.herokuapp.com";

export const getWorkouts = () => dispatch => {
  dispatch({ type: FETCHING_WORKOUTS });
  axios
    .get("baseurl/workouts")
    .then(respond =>
      dispatch({
        type: FETCHING_WORKOUTS_SUCCESS,
        payload: respond.data
      })
    )
    .catch(err => dispatch({ type: FETCHING_WORKOUTS_FAILURE, payload: err }));
};
