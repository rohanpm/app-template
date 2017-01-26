import {Action} from "redux";

import * as State from "./state";

export const APPEND_SAMPLE_ITEM = "APPEND_SAMPLE_ITEM";
export const APPEND_TODO = "APPEND_TODO";
export const SET_TODO_STATUS = "SET_TODO_STATUS";

export interface DatedAction extends Action {
    payload: Date;
}

export interface AppendTodoAction extends Action {
    type: "APPEND_TODO";
    description: string;
}

export interface ModifyTodoAction extends Action {
    todoItem: State.TodoItem;
}

export interface SetTodoStatusAction extends ModifyTodoAction {
    type: "SET_TODO_STATUS";
    status: State.TodoStatus;
}

