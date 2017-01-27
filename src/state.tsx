export enum TodoStatus {
    Pending,
    Done,
}

export interface TodoItem {
    text: string;
    status: TodoStatus;
}

export interface TodoState {
    items: TodoItem[];
}

export interface State {
    loaded: boolean;
    todo: TodoState;
}
