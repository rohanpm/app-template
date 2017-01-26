import { combineReducers } from "redux";

import {AppendTodoAction, SetTodoStatusAction, APPEND_TODO, SET_TODO_STATUS} from "../actionTypes";
import {TodoItem, TodoStatus} from "../state";

type TodoList = TodoItem[];
type TodoAction = AppendTodoAction | SetTodoStatusAction;

function append(state: TodoList, action: AppendTodoAction): TodoList {
    const item = {
        text: action.description,
        status: TodoStatus.Pending
    };
    return state.concat([item]);
}

function setStatus(state: TodoList, action: SetTodoStatusAction): TodoList {
    console.log("set status", action);
    return state.map((item): TodoItem => {
        if (item === action.todoItem) {
            return Object.assign({}, item, {status: action.status});
        }
        return item;
    });
}

function items(state: TodoList = [], action: TodoAction): TodoList {
    if (action.type === APPEND_TODO) {
        return append(state, action as AppendTodoAction);
    }
    if (action.type === SET_TODO_STATUS) {
        return setStatus(state, action as SetTodoStatusAction);
    }
    return state;
}

export const todo = combineReducers({ items });
