export type TodoType = {
    id: string;
    content: string;
    completed: boolean;
    favorite: boolean;
};

export type AggregationType = {
    total: number;
    completed: number;
    active: number;
};