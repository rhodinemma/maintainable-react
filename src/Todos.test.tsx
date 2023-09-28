/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Todo } from "./Todo";

describe('Todos application', () => {
    it('renders the title', () => {
        render(<Todo />);

        expect(screen.getByText("todos")).toBeInTheDocument();
    })

    it('adds item to the list', () => {
        render(<Todo />);

        const input = screen.getByTestId('todo-input');

        act(() => {
            userEvent.type(input, 'buy some milk');
            userEvent.type(input, '{enter}');
        });

        expect(screen.getByText("buy some milk")).toBeInTheDocument();
    })
})