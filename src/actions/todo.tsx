import * as ActionTypes from "../actionTypes";
import {TodoItem, TodoStatus} from "../state";

export function setTodoStatus(todoItem: TodoItem, status: TodoStatus): ActionTypes.SetTodoStatusAction {
    console.log("creating set todo status action");
    return {
        type: ActionTypes.SET_TODO_STATUS,
        todoItem,
        status
    };
}

export const setTodoDone = (item: TodoItem) => setTodoStatus(item, TodoStatus.Done);
export const setTodoIncomplete = (item: TodoItem) => setTodoStatus(item, TodoStatus.Pending);
export const toggleTodo = (item: TodoItem) =>
    setTodoStatus(item, item.status === TodoStatus.Done ? TodoStatus.Pending : TodoStatus.Done);

export function appendTodo(description: string): ActionTypes.AppendTodoAction {
    return {
        type: ActionTypes.APPEND_TODO,
        description
    };
}