import * as React from "react";
import { connect } from "react-redux";
import { List, ListItem, ListItemContent, ListCheckbox } from "react-toolbox/lib/list";

import { toggleTodo } from "../actions/todo";
import * as State from "../state";

interface OwnProps {
    todo: State.TodoItem[];
}
interface DispatchProps {
    toggleTodo: Function;
}
interface Props extends OwnProps, DispatchProps {};

function doRenderItem(toggleTodo: Function, item: State.TodoItem, index: number) {
    return <ListCheckbox
        key={index}
        caption={item.text}
        checked={item.status === State.TodoStatus.Done}
        onChange={() => toggleTodo(item)}
    />;
}

function _TodoList({todo, toggleTodo}: Props) {
    const renderItem = doRenderItem.bind(undefined, toggleTodo);
    return <List>
        {todo.map(renderItem)}
    </List>;
}

export const TodoList = connect((state, props: OwnProps) => props, { toggleTodo })(_TodoList);
