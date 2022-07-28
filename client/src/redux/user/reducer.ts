import { initUserType } from "../type";
import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "./action";



const init: initUserType = {
  loading: false,
  error: false,
  user: [],
};

export const userReducer = (
  state = init,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case USER_LOADING:
      break;

    case USER_SUCCESS:
      break;

    case USER_ERROR:
      break;

    default:
      return state
  }
};
