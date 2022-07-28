import { initUserType } from "../type";
import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "./action";

const init: initUserType = {
  loading: false,
  error: false,
  user: [],
};

export const userReducer = (
  state: initUserType = init,
  action: { type: string; payload: any }
): initUserType => {
  switch (action.type) {
    case USER_LOADING:
      return {
        loading: true,
        error: false,
        user: [],
      };

    case USER_SUCCESS:
      return {
        loading: false,
        error: false,
        user: action.payload,
      };

    case USER_ERROR:
      return {
        loading: false,
        error: true,
        user: [],
      };

    default:
      return state;
  }
};
