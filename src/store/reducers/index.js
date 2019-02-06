import {
  FETCHING_WORKOUTS,
  FETCHING_WORKOUTS_SUCCESS,
  FETCHING_WORKOUTS_FAILURE,
  DELETE_WORKOUTS_START,
  DELETE_WORKOUTS_SUCCESS,
  DELETE_WORKOUTS_FAILURE
} from "../actions";

const initialState = {
  workouts: [],
  exercises: [],
  isFetchingWorkouts: false,
  error: null
};

const WorkoutsReducer = (state = initialState, action) => {
  console.log("reducer", action);

  switch (action.type) {
    // ================================ GETTING DATA ====================
    case FETCHING_WORKOUTS:
      return { ...state, isFetchingWorkouts: true, error: null };

    case FETCHING_WORKOUTS_SUCCESS:
      return {
        ...state,
        workouts: action.payload.journalsObj,
        exercises: action.payload.exerciseCards,
        isFetchingWorkouts: false,
        error: null
      };

    case FETCHING_WORKOUTS_FAILURE:
      return { ...state, isFetchingWorkouts: false, error: action.payload };

    default:
      return state;
  }
};

export default WorkoutsReducer;
