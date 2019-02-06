import axios from "axios";

// ================================ WORKOUTS & EXERCISES ====================
export const FETCHING_WORKOUTS = "FETCHING_WORKOUTS";
export const FETCHING_WORKOUTS_SUCCESS = "FETCHING_WORKOUTS_SUCCESS";
export const FETCHING_WORKOUTS_FAILURE = "FETCHING_WORKOUTS_FAILURE";

// ================================ WORKOUTS ====================
export const ADD_WORKOUT_START = "ADD_WORKOUTS_START";
export const ADD_WORKOUT_SUCCESS = "ADD_WORKOUTS_SUCCESS";
export const ADD_WORKOUT_FAILURE = "ADD_WORKOUTS_FAILURE";
export const DELETE_WORKOUT_START = "DELETE_WORKOUTS_START";
export const DELETE_WORKOUT_SUCCESS = "DELETE_WORKOUTS_SUCCESS";
export const DELETE_WORKOUT_FAILURE = "DELETE_WORKOUTS_FAILURE";

const baseUrl = "https://weightliftingjournallambda.herokuapp.com";

// ================================ GET WORKOUTS ====================
export const getWorkouts = () => dispatch => {
  dispatch({ type: FETCHING_WORKOUTS });

  axios
    .get(`${baseUrl}/workouts`, {
      headers: { Authorization: localStorage.getItem("jwt") }
    })
    .then(res => {
      dispatch({
        type: FETCHING_WORKOUTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(error =>
      dispatch({ type: FETCHING_WORKOUTS_FAILURE, payload: error })
    );
};

// ================================ ADD WORKOUT ====================

export const addWorkout = workout => {
  return dispatch => {
    dispatch({ type: ADD_WORKOUT_START });

    return axios
      .post(`${baseUrl}/workouts`, workout, {
        headers: { Authorization: localStorage.getItem("jwt") }
      })
      .then(res => {
        dispatch({
          type: ADD_WORKOUT_SUCCESS,
          payload: { ...workout, ...res.data }
        });
      })
      .catch(error => dispatch({ type: ADD_WORKOUT_FAILURE, payload: error }));
  };
};

// ================================ DELETE WORKOUT ====================
export const deleteWorkout = id => dispatch => {
  dispatch({ type: DELETE_WORKOUT_START });

  axios
    .delete(`${baseUrl}/workouts/${id}`, {
      headers: { Authorization: localStorage.getItem("jwt") }
    })
    .then(response => {
      dispatch({ type: DELETE_WORKOUT_SUCCESS, payload: id });
    })
    .catch(error => dispatch({ type: DELETE_WORKOUT_FAILURE, payload: error }));
};
