import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  try {
    const res = await publicRequest.post("/auth/register", user);
    console.log(res);
    return "success";
  } catch (err) {
    console.log(err);
    return "failed";
  }
};
