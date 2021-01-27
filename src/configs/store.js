import { createStore, combineReducers, applyMiddleware } from "redux";
import course from "../redux/reducers/course";
import credentials from "../redux/reducers/credentials";
import thunk from "redux-thunk";

//create root reducer
const reducer = combineReducers({
  course,
  credentials,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
