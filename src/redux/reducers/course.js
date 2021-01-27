import { SET_COURSES } from "../actions/type";

let initialState = {
  courseList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COURSES:
      // state.courseList = payload;

      return { ...state, courseList: payload };
    default:
      return state;
  }
};

export default reducer;
