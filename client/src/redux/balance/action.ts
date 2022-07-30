import axios from "axios";
import { AppDispatch } from "../store";
import { callbackFxn } from "../type";

export const BALANCE_LOADING = "BALANCE_LOADING";
export const BALANCE_SUCCESS = "BALANCE_SUCCESS";
export const BALANCE_ERROR = "BALANCE_ERROR";

export const addCustomer: callbackFxn =
  (payload: { email: string }) => (dispatch: ({}) => AppDispatch) => {
    dispatch({
      type: BALANCE_LOADING,
    });
    axios
      .post(
        "https://walter-wallet-server.vercel.app/walter-wallet/dashboard/addCustomer",
        { ...payload },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch({
          type: BALANCE_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: BALANCE_ERROR,
        });
      });
  };
