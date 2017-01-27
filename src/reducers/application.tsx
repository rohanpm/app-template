import { combineReducers, Action } from "redux";

import { State } from "../state";
import { todo } from "./todo";

export const appReducer = combineReducers({ todo });
