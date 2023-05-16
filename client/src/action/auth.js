import * as api from "../Api/index";
import { AUTH } from "../actiontypes/actionTypes";

export const signIn = (userData, history) => async (dispatch) => {
  const { data } = await api.signin(userData);
  dispatch({ type: AUTH, data });
  history("/");
};

export const signUp = (userData, history) => async (dispatch) => {
  const { data } = await api.signup(userData);
  dispatch({ type: AUTH, data });
  history("/");
};
