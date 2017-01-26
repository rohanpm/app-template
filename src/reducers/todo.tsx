import { combineReducers } from "redux";

import {AppendTodoAction, SetTodoStatusAction, RemoveTodoAction, APPEND_TODO, SET_TODO_STATUS, REMOVE_TODO} from "../actionTypes";
import {TodoItem, TodoStatus} from "../state";

type TodoList = TodoItem[];
type TodoAction = AppendTodoAction | SetTodoStatusAction | RemoveTodoAction;

function append(state: TodoList, action: AppendTodoAction): TodoList {
    const item = {
        text: action.description,
        status: TodoStatus.Pending,
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

function remove(state: TodoList, action: RemoveTodoAction): TodoList {
    return state.filter((item) => item !== action.todoItem);
}

function items(state: TodoList = [], action: TodoAction): TodoList {
    if (action.type === APPEND_TODO) {
        return append(state, action as AppendTodoAction);
    }
    if (action.type === SET_TODO_STATUS) {
        return setStatus(state, action as SetTodoStatusAction);
    }
    if (action.type === REMOVE_TODO) {
        return remove(state, action as RemoveTodoAction);
    }
    return state;
}

export const todo = combineReducers({ items });
