///<reference path='../../node_modules/testcheck/dist/testcheck.d.ts'/>

import { check, property, gen as tcgen, Generator } from "testcheck";
import { Action } from "redux";

import { AppendTodoAction, APPEND_TODO, REMOVE_TODO, SET_TODO_STATUS } from "../../src/actionTypes";
import { TodoItem, TodoState, TodoStatus } from "../../src/state";
import { todo } from "../../src/reducers/todo";

import * as gen from "../gen";

const genAppendTodoAction: Generator<AppendTodoAction> = tcgen.object({
    type: tcgen.return(APPEND_TODO),
    description: tcgen.string,
});


function deepCopy<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
}

function unmodified(state: TodoState, action: Action) {
    const original = deepCopy(state);
    const updated = todo(state, action);
    expect(updated).toEqual(original);
    return true;
}

function checkTest(name: string, argGens: Generator<any>[], propertyFn: (...args: any[]) => boolean) {
    test(name, () => {
        const result = check(property(argGens, propertyFn));
        expect(result).toMatchObject({ result: true });
    });
}


checkTest("returns unmodified state on unknown action",
    [gen.todoState, tcgen.return({ type: "quux" })],
    unmodified,
);

checkTest("append adds one item",
    [gen.todoState, genAppendTodoAction],
    (state: TodoState, action: AppendTodoAction) => {
        const originalLength = state.items.length;
        const newLength = todo(state, action).items.length;
        return newLength === originalLength + 1;
    },
);

test("remove absent item does nothing", () => {
    const item0: TodoItem = {
        text: "item0",
        status: TodoStatus.Done,
    };
    const item1: TodoItem = {
        text: "item1",
        status: TodoStatus.Pending,
    };
    const original: TodoState = { items: [item0, item1] };
    const updated: TodoState = todo(original,
        { type: REMOVE_TODO, todoItem: { text: "quux", status: TodoStatus.Done } });
    expect(original).toEqual(updated);
});

test("item can be removed", () => {
    const item0: TodoItem = {
        text: "item0",
        status: TodoStatus.Done,
    };
    const item1: TodoItem = {
        text: "item1",
        status: TodoStatus.Pending,
    };
    const original: TodoState = { items: [item0, item1] };
    const updated: TodoState = todo(original,
        { type: REMOVE_TODO, todoItem: item1 });
    expect(updated).toEqual({ items: [item0] });
});

test("item's status can be updated", () => {
    const item0: TodoItem = {
        text: "item0",
        status: TodoStatus.Done,
    };
    const item1: TodoItem = {
        text: "item1",
        status: TodoStatus.Pending,
    };
    const original: TodoState = { items: [item0, item1] };
    const updated: TodoState = todo(original,
        { type: SET_TODO_STATUS, todoItem: item1, status: TodoStatus.Done });
    expect(updated).toEqual({
        items: [item0, { text: "item1", status: TodoStatus.Done }],
    });

    // original item was not mutated
    expect(item1.status).toEqual(TodoStatus.Pending);
});
