import * as actionTypes from "./actionTypes";
import { loginRequest } from "../../utils/api";

export function loginSuccess(value) {
  return {
    type: actionTypes.SESSION_LOGIN_SUCCESS,
    payload: value,
  };
}

export function loginFail(value) {
  return {
    type: actionTypes.SESSION_LOGIN_FAIL,
    payload: value,
  };
}

export function logout(value) {
  return {
    type: actionTypes.SESSION_LOGOUT,
    payload: value,
  };
}

export const loginAsync = (loginObj) => {
  return async (dispatch, getState) => {
    let loginToken = await loginRequest(loginObj.username, loginObj.password);

    if (loginToken !== "invalid") {
      dispatch(loginSuccess(loginToken));
    } else {
      dispatch(loginFail(loginToken));
    }
  };
};

export const logoutAsync = () => {
  return async (dispatch, getState) => {
    dispatch(logout(null));
  };
};
