import { combineReducers } from "redux";

import { todo } from "./todo";

export const appReducer = combineReducers({ todo });