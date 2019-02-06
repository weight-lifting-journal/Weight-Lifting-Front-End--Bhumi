import {
  FETCHING_WORKOUTS,
  FETCHING_WORKOUTS_SUCCESS,
  FETCHING_WORKOUTS_FAILURE,
  ADD_WORKOUT_START,
  ADD_WORKOUT_SUCCESS,
  ADD_WORKOUT_FAILURE,
  DELETE_WORKOUT_START,
  DELETE_WORKOUT_SUCCESS,
  DELETE_WORKOUT_FAILURE,
  ADD_EXERCISE_START,
  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_FAILURE
} from "../actions";

const initialState = {
  workouts: [],
  exercises: [],
  isFetchingWorkouts: false,
  isAddingWorkout: false,
  isDeletingWorkout: false,
  isAddingExercise: false,
  error: null
};

const WorkoutsReducer = (state = initialState, action) => {
  console.log("reducer", action);

  switch (action.type) {
    // ================================ GET WORKOUTS ====================
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

    // ================================ ADD WORKOUT ====================
    case ADD_WORKOUT_START:
      return { ...state, isAddingWorkout: true, error: null };

    case ADD_WORKOUT_SUCCESS:
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
        isAddingWorkout: false,
        error: null
      };

    case ADD_WORKOUT_FAILURE:
      return { ...state, isAddingWorkout: false, error: action.payload };

    // ================================ DELETE WORKOUT ====================
    case DELETE_WORKOUT_START:
      return { ...state, isDeletingWorkout: true, error: null };

    case DELETE_WORKOUT_SUCCESS:
      return {
        ...state,
        workouts: state.workouts.filter(workout => {
          return workout.id !== action.payload;
        }),
        isDeletingWorkout: false,
        error: null
      };

    case DELETE_WORKOUT_FAILURE:
      return {
        ...state,
        isDeletingWorkout: false,
        error: action.payload
      };

    // ================================ ADD EXERCISE ====================
    case ADD_WORKOUT_START:
      return { ...state, isAddingWorkout: true, error: null };

    case ADD_WORKOUT_SUCCESS:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        isAddingWorkout: false,
        error: null
      };

    case ADD_WORKOUT_FAILURE:
      return { ...state, isAddingWorkout: false, error: action.payload };

    default:
      return state;
  }
};

export default WorkoutsReducer;
