export enum TodoStatus {
    Pending,
    Done,
};

export interface TodoItem {
    text: string;
    status: TodoStatus;
};

export interface State {
    loaded: boolean;
    items: Date[];
    todo: {
        items: TodoItem[]
    };
};
