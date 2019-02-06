import axios from "axios";

export const ADD_EXERCISE_START = "ADD_EXERCISE_START";
export const ADD_EXERCISE_SUCCESS = "ADD_EXERCISE_SUCCESS";
export const ADD_EXERCISE_FAILURE = "ADD_EXERCISE_FAILURE";

const baseUrl = "https://weightliftingjournallambda.herokuapp.com";
// ================================ ADD WORKOUT ====================

/**
    journalId	Int	Yes
    name	String	Yes
    reps	Int	Yes
    sets	Int	Yes
    weight	String	Yes
 */
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
          payload: { ...exercise, ...res.data }
        });
      })
      .catch(error => dispatch({ type: ADD_EXERCISE_FAILURE, payload: error }));
  };
};
