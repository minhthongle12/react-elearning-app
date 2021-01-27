import { SET_TOKEN } from "../actions/type";

let initialState = {
  token: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      state.token = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
