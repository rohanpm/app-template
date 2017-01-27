import { combineReducers, Action } from "redux";

import { State, EMPTY_STATE } from "../state";
import { todo } from "./todo";

export const appReducer = combineReducers({ todo });
