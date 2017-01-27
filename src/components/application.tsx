import * as React from "react";
import { connect } from "react-redux";

import { TodoList } from "./todoList";
import { TodoInput } from "./todoInput";
import * as State from "../state";

const ApplicationInner = ({todo}: State.State) =>
    <div>
        <TodoList todo={todo.items} />
        <TodoInput />
    </div>;

const stateToProps = (state: State.State) => state;
export const Application = connect(stateToProps)(ApplicationInner);