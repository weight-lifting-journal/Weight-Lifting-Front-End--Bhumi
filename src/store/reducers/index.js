import {
  FETCHING_WORKOUTS,
  FETCHING_WORKOUTS_SUCCESS,
  FETCHING_WORKOUTS_FAILURE,
  ADD_WORKOUT_START,
  ADD_WORKOUT_SUCCESS,
  ADD_WORKOUT_FAILURE,
  UPDATE_WORKOUT_START,
  UPDATE_WORKOUT_SUCCESS,
  UPDATE_WORKOUT_FAILURE,
  DELETE_WORKOUT_START,
  DELETE_WORKOUT_SUCCESS,
  DELETE_WORKOUT_FAILURE,
  ADD_EXERCISE_START,
  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_FAILURE,
  UPDATE_EXERCISE_START,
  UPDATE_EXERCISE_SUCCESS,
  UPDATE_EXERCISE_FAILURE,
  DELETE_EXERCISE_START,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE
} from "../actions";

const initialState = {
  workouts: [],
  exercises: [],
  isFetchingWorkouts: false,
  isAddingWorkout: false,
  isUpdatingWorkout: false,
  isDeletingWorkout: false,
  isAddingExercise: false,
  isUpdatingExercise: false,
  isDeletingExercise: false,
  error: null
};

const WorkoutsReducer = (state = initialState, action) => {
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

    // ================================ UPDATE WORKOUT ====================
    case UPDATE_WORKOUT_START:
      return { ...state, isUpdatingWorkout: true, error: null };

    case UPDATE_WORKOUT_SUCCESS:
      return {
        ...state,
        workouts: state.workouts.map(workout => {
          if (workout.id === action.payload.id) {
            return action.payload;
          } else {
            return workout;
          }
        }),
        isUpdatingWorkout: false,
        error: null
      };

    case UPDATE_WORKOUT_FAILURE:
      return {
        ...state,
        isUpdatingWorkout: false,
        error: action.payload
      };

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
    case ADD_EXERCISE_START:
      return { ...state, isAddingExercise: true, error: null };

    case ADD_EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        isAddingExercise: false,
        error: null
      };

    case ADD_EXERCISE_FAILURE:
      return { ...state, isAddingExercise: false, error: action.payload };

    // ================================ UPDATE EXERCISE ====================
    case UPDATE_EXERCISE_START:
      return { ...state, isUpdatingExercise: true, error: null };

    case UPDATE_EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: state.exercises.map(exercise => {
          if (exercise.id === action.payload.id) {
            return action.payload;
          } else {
            return exercise;
          }
        }),
        isUpdatingExercise: false,
        error: null
      };

    case UPDATE_EXERCISE_FAILURE:
      return {
        ...state,
        isUpdatingExercise: false,
        error: action.payload
      };

    // ================================ DELETE EXERCISE ====================
    case DELETE_EXERCISE_START:
      return { ...state, isDeletingExercise: true, error: null };

    case DELETE_EXERCISE_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        exercises: state.exercises.filter(exercise => {
          return exercise.id !== Number(action.payload.id);
        }),
        isDeletingExercise: false,
        error: null
      };

    case DELETE_EXERCISE_FAILURE:
      return {
        ...state,
        isDeletingExercise: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default WorkoutsReducer;
