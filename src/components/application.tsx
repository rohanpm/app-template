import * as React from "react";
import {connect} from "react-redux";
import {Button} from "react-toolbox/lib/button";

import {TodoList} from "./todoList";
import {TodoInput} from "./todoInput";
import * as State from "../state";
import {appendSampleItem} from "../actions/sample";

interface Props extends State.State {
    addItem: Function;
}

const ApplicationInner = ({todo, addItem}: Props) =>
    <div>
        <TodoList todo={todo.items} />
        <TodoInput/>
    </div>;

const stateToProps = (state: State.State) => state;
const dispatchToProps = {
    addItem: appendSampleItem,
};

export const Application = connect(stateToProps, dispatchToProps)(ApplicationInner);