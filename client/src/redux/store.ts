import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { balanceReducer } from "./balance/reducer";
import { userReducer } from "./user/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// export interface IRootState {
//   demo: IDemoState
// }
// const store = createStore<IRootState, any, any, any>(
//   combineReducers({
//       demo: demoReducer
// }));

const Reducer = {
  user: userReducer,
  balance: balanceReducer,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore(Reducer, enhancer);
