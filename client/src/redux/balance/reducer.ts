import { initBalanceType } from "../type";
import { BALANCE_ERROR, BALANCE_LOADING, BALANCE_SUCCESS } from "./action";

const init: initBalanceType = {
  loading: false,
  error: false,
  balance: [],
};

export const balanceReducer = (
  state: initBalanceType = init,
  action: { type: string; payload: any }
): initBalanceType => {
  switch (action.type) {
    case BALANCE_LOADING:
      return {
        loading: true,
        error: false,
        balance: [],
      };

    case BALANCE_SUCCESS:
      return {
        loading: false,
        error: false,
        balance: action.payload,
      };

    case BALANCE_ERROR:
      return {
        loading: false,
        error: true,
        balance: [],
      };

    default:
      return state;
  }
};
