export type TodoType = {
    id: string;
    content: string;
    completed: boolean;
};

export type AggregationType = {
    total: number;
    completed: number;
    active: number;
};