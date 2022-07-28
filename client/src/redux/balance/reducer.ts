import { initBalanceType } from "../type";
import { BALANCE_ERROR, BALANCE_LOADING, BALANCE_SUCCESS } from "./action";



const init: initBalanceType = {
  loading: false,
  error: false,
  balance: [],
};

export const balanceReducer = (
  state = init,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case BALANCE_LOADING:
      break;

    case BALANCE_SUCCESS:
      break;

    case BALANCE_ERROR:
      break;

    default:
      return state
  }
};
