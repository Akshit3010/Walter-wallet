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
      .post("https://walter-wallet-server.vercel.app/walter-wallet/register", {
        ...payload,
      })
      .then((res) => {
        dispatch({
          type: USER_SUCCESS,
        });
        notify(res.data.message);
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
      .post(
        "https://walter-wallet-server.vercel.app/walter-wallet/login",
        { ...payload },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch({
          type: USER_SUCCESS,
          payload: res.data.data,
        });
        notify(res.data.message);
      })
      .catch((err) => {
        dispatch({
          type: USER_ERROR,
        });
        error(err.message);
      });
  };

export const LogoutUser: callbackFxn =
  () => (dispatch: ({}) => AppDispatch) => {
    dispatch({
      type: USER_LOADING,
    });
    axios
      .post(
        "https://walter-wallet-server.vercel.app/walter-wallet/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch({
          type: USER_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: USER_ERROR,
        });
      });
  };

export const checkLogin: callbackFxn =
  () => (dispatch: ({}) => AppDispatch) => {
    dispatch({
      type: USER_LOADING,
    });
    axios
      .post(
        "https://walter-wallet-server.vercel.app/walter-wallet/checklogin",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch({
          type: USER_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: USER_ERROR,
        });
      });
  };
