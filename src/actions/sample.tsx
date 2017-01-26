import * as ActionTypes from "../actionTypes";

export function appendSampleItem(): ActionTypes.AppendTodoAction {
    return {
        type: ActionTypes.APPEND_TODO,
        description: "Do something..."
    };
}