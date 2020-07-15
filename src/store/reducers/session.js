import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  count: 0,
  isLoggedIn: false,
  loginToken: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_LOGIN_SUCCESS:
      return updateObject(state, {
        loginToken: action.payload,
        isLoggedIn: true,
      });
    case actionTypes.SESSION_LOGIN_FAIL:
      return updateObject(state, { loginToken: action.payload });
    case actionTypes.SESSION_LOGOUT:
      return updateObject(state, {
        loginToken: action.payload,
        isLoggedIn: false,
      });
    default:
      return state;
  }
};

export default reducer;
