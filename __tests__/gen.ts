///<reference path='../node_modules/testcheck/dist/testcheck.d.ts'/>

import { Generator, gen } from "testcheck";

import { TodoStatus, TodoItem, TodoState, State } from "../src/state";

export const todoStatus: Generator<TodoStatus> = gen.intWithin(TodoStatus.Pending, TodoStatus.Done);
export const todoItem: Generator<TodoItem> = gen.object({
    status: todoStatus,
    text: gen.string,
});
export const todoItems: Generator<TodoItem[]> = gen.array(todoItem);
export const todoState: Generator<TodoState> = gen.object({
    items: todoItems,
});

export const state: Generator<State> = gen.object({
    loaded: gen.boolean,
    todo: todoState,
});