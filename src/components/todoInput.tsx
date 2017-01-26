import * as React from "react";
import { connect } from "react-redux";
import Input from "react-toolbox/lib/input";

import { appendTodo } from "../actions/todo";

interface OwnProps {
}
interface DispatchProps {
    appendTodo: Function;
}
interface Props extends OwnProps, DispatchProps { }

interface State {
    value: string;
}


class TodoInputImpl extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { value: "" };
    }

    render() {
        return <Input
            value={this.state.value}
            onChange={(value: string) => this.setState({ value })}
            onKeyPress={this.handleKeyPress.bind(this)}
            label="New item..." />;
    }

    handleKeyPress(event: any) {
        if (event.key !== "Enter") {
            return;
        }
        this.props.appendTodo(event.target.value);
        this.setState({ value: "" });
    }

}

export const TodoInput = connect(undefined, { appendTodo })(TodoInputImpl);
