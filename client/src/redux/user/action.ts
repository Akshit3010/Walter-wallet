import axios from "axios";
import { callbackFxn } from "../type";
import { AppDispatch } from "../store";

export const USER_LOADING = "USER_LOADING";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERROR = "USER_ERROR";

export const createUser: callbackFxn =
  (
    payload: { name: string; email: string; role: string },
    notify: (arg0: string) => any,
    error: (arg0: string) => any
  ) =>
  (dispatch: ({}) => AppDispatch) => {
    dispatch({
      type: USER_LOADING,
    });
    axios
      .post("http://localhost:8080/walter-wallet/register", { payload })
      .then((res) => {
        dispatch({
          type: USER_SUCCESS,
        });
        notify(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: USER_ERROR,
        });
        error(err.message);
      });
  };

export const LoginUser: callbackFxn =
  (
    payload: { email: string },
    notify: (arg0: string) => any,
    error: (arg0: string) => any
  ) =>
  (dispatch: ({}) => AppDispatch) => {
    dispatch({
      type: USER_LOADING,
    });
    axios
      .post("http://localhost:8080/walter-wallet/login", { payload })
      .then((res) => {
        dispatch({
          type: USER_SUCCESS,
          payload: res.data,
        });
        notify(res.data);
      })
      .catch((err) => {
        dispatch({
          type: USER_ERROR,
        });
        error(err.message);
      });
  };
