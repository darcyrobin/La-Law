import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_RESET,
  USER_PROFILE_SUCCESS,
  USER_REGISTER_SUCCESS,
} from "./actionType";

export const login = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const logout = (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_PROFILE_RESET });
};
export const register = (data) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: data,
  };
};

export const userProfile = (data) => {
  return {
    type: USER_PROFILE_SUCCESS,
    payload: data,
  };
};
