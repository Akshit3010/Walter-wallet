import { TypedUseSelectorHook, useSelector } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
  AnyAction,
} from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { balanceReducer } from "./balance/reducer";
import { initBalanceType, initUserType } from "./type";
import { userReducer } from "./user/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type reducerType = {
  user: initUserType;
  balance: initBalanceType;
};

const Reducer = combineReducers({
  user: userReducer,
  balance: balanceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore<reducerType, any, any, any>(Reducer, enhancer);

/* Types */
export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof Reducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
