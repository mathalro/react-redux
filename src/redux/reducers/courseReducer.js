import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.SEARCH_COURSES: {
      let filter = action.filter.toLowerCase();
      let newState = state.filter((course) =>
        course.title.toLowerCase().includes(filter)
      );
      return newState;
    }
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter((course) => course.id != action.course.id);
    default:
      return state;
  }
}
