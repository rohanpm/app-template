import * as React from "react";
import { connect } from "react-redux";
import { List, ListItem, ListItemContent, ListItemText, ListItemLayout } from "react-toolbox/lib/list";
import Checkbox from "react-toolbox/lib/checkbox";
import {IconButton} from "react-toolbox/lib/button";

import { toggleTodo, removeTodo } from "../actions/todo";
import * as State from "../state";

interface OwnProps {
    todo: State.TodoItem[];
}
interface DispatchProps {
    toggleTodo: Function;
    removeTodo: Function;
}
interface Props extends OwnProps, DispatchProps {};

function doRenderItem(toggleTodo: Function, removeTodo: Function, item: State.TodoItem, index: number) {
    const toggler = (event: any) => {
        event.preventDefault();
        toggleTodo(item);
    };
    const remover = (event: any) => {
        event.preventDefault();
        removeTodo(item);
    };
    const text = <ListItemText>{item.text}</ListItemText>;
    const checkbox = <Checkbox
        checked={item.status === State.TodoStatus.Done}
    />;
    const remove = <IconButton onClick={remover} accent icon="delete"/>;
    return <ListItem key={index} onClick={toggler}>
        <ListItemLayout
            leftActions={[checkbox]}
            rightActions={[remove]}
            itemContent={text}>
        </ListItemLayout>
    </ListItem>;
}

function _TodoList({todo, toggleTodo, removeTodo}: Props) {
    const renderItem = doRenderItem.bind(undefined, toggleTodo, removeTodo);
    return <List>
        {todo.map(renderItem)}
    </List>;
}

export const TodoList = connect((state, props: OwnProps) => props, { toggleTodo, removeTodo })(_TodoList);
