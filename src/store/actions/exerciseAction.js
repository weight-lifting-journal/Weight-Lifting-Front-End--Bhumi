import axios from "axios";

export const ADD_EXERCISE_START = "ADD_EXERCISE_START";
export const ADD_EXERCISE_SUCCESS = "ADD_EXERCISE_SUCCESS";
export const ADD_EXERCISE_FAILURE = "ADD_EXERCISE_FAILURE";
export const DELETE_EXERCISE_START = "DELETE_EXERCISE_START";
export const DELETE_EXERCISE_SUCCESS = "DELETE_EXERCISE_SUCCESS";
export const DELETE_EXERCISE_FAILURE = "DELETE_EXERCISE_FAILURE";

const baseUrl = "https://weightliftingjournallambda.herokuapp.com";

// ================================ ADD EXERCISE ====================

export const addExercise = exercise => {
  console.log("addExercise =====", exercise);

  return dispatch => {
    dispatch({ type: ADD_EXERCISE_START });

    return axios
      .post(`${baseUrl}/workouts/${exercise.journalId}/exercises`, exercise, {
        headers: { Authorization: localStorage.getItem("jwt") }
      })
      .then(res => {
        dispatch({
          type: ADD_EXERCISE_SUCCESS,
          payload: {
            ...exercise,
            ...res.data
          }
        });
      })
      .catch(error => dispatch({ type: ADD_EXERCISE_FAILURE, payload: error }));
  };
};

// ================================ DELETE EXERCISE ====================

export const deleteExercise = exercise => {
  console.log("deleteExercise =====", exercise);

  return dispatch => {
    dispatch({ type: DELETE_EXERCISE_START });

    return axios
      .post(
        `${baseUrl}/workouts/${exercise.journalId}/exercises/${
          exercise.exerciseId
        }`,
        exercise,
        {
          headers: { Authorization: localStorage.getItem("jwt") }
        }
      )
      .then(res => {
        dispatch({
          type: DELETE_EXERCISE_SUCCESS,
          payload: {}
        });
      })
      .catch(error =>
        dispatch({ type: DELETE_EXERCISE_FAILURE, payload: error })
      );
  };
};
