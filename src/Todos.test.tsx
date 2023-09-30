/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Todo } from "./Todo";

describe("Todos application", () => {
  it("renders the title", () => {
    render(<Todo />);

    expect(screen.getByText("todos")).toBeInTheDocument();
  });

  it("adds item to the list", () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");

    act(() => {
      userEvent.type(input, "buy new laptop");
      userEvent.type(input, "{enter}");
    });

    expect(screen.getByText("buy new laptop")).toBeInTheDocument();
  });

  it("completes an item when clicked", () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");

    act(() => {
      userEvent.type(input, "buy some milk");
      userEvent.type(input, "{enter}");
    });

    const item = screen.getByText("buy some milk");

    act(() => {
      userEvent.click(item);
    });

    expect(item).toHaveAttribute("data-completed", "true");
  });

  it("deletes an item when button is clicked", () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");

    act(() => {
      userEvent.type(input, "buy some milk");
      userEvent.type(input, "{enter}");
    });

    const item = screen.getByText("buy some milk");
    expect(item).toBeInTheDocument();

    const deleteButton = screen.getByTestId("delete-button");

    act(() => {
      userEvent.click(deleteButton);
    });

    expect(item).not.toBeInTheDocument();
  });

  it("renders a list of items", () => {
    const items = [
      { id: "1", content: "buy some milk", completed: false },
      { id: "2", content: "buy some bread", completed: true },
      { id: "3", content: "buy some eggs", completed: false },
    ];

    render(<Todo items={items} />);
    expect(screen.getByText("buy some milk")).toBeInTheDocument();
  });

  describe("Aggregation", () => {
    const items = [
      { id: "1", content: "buy some milk", completed: false },
      { id: "2", content: "buy some bread", completed: true },
      { id: "3", content: "buy some eggs", completed: false },
    ];

    it("renders different groups of items", () => {
      render(<Todo items={items} />);

      const todoItems = screen.getAllByTestId("todo-item");
      expect(todoItems.length).toEqual(items.length);

      const completedTab = screen.getByTestId("todo-completed");
      act(() => {
        userEvent.click(completedTab);
      });

      expect(screen.getAllByTestId("todo-item").length).toEqual(1);
      expect(screen.getByText("buy some bread")).toBeInTheDocument();
    });

    it("switch tabs", () => {
      render(<Todo items={items} />);

      const todoItems = screen.getAllByTestId("todo-item");
      expect(todoItems.length).toEqual(items.length);

      const totalTab = screen.getByTestId("todo-total");
      act(() => {
        userEvent.click(totalTab);
      });

      expect(screen.getAllByTestId("todo-item").length).toEqual(3);
    });

    it("renders active groups of items", () => {
      const items = [
        { id: "1", content: "buy some milk", completed: false },
        { id: "2", content: "buy some bread", completed: true },
        { id: "3", content: "buy some eggs", completed: false },
      ];

      render(<Todo items={items} />);

      const todoItems = screen.getAllByTestId("todo-item");
      expect(todoItems.length).toEqual(items.length);

      const activeTab = screen.getByTestId("todo-active");
      act(() => {
        userEvent.click(activeTab);
      });

      expect(screen.getAllByTestId("todo-item").length).toEqual(2);
      expect(screen.getByText("buy some eggs")).toBeInTheDocument();
    });

    it("show summary information", () => {
      const items = [
        { id: "1", content: "buy some milk", completed: false },
        { id: "2", content: "buy some bread", completed: true },
        { id: "3", content: "buy some eggs", completed: false },
      ];

      render(<Todo items={items} />);

      const todoItems = screen.getAllByTestId("todo-item");
      expect(todoItems.length).toEqual(items.length);

      const totalTab = screen.getByTestId("todo-total");
      act(() => {
        userEvent.click(totalTab);
      });

      const activeTab = screen.getByTestId("todo-active");
      act(() => {
        userEvent.click(activeTab);
      });

      const completedTab = screen.getByTestId("todo-completed");
      act(() => {
        userEvent.click(completedTab);
      });

      expect(screen.getAllByTestId("todo-item").length).toEqual(1);
      expect(within(totalTab).getByText("3")).toBeInTheDocument();
      expect(within(activeTab).getByText("2")).toBeInTheDocument();
      expect(within(completedTab).getByText("1")).toBeInTheDocument();
    });
  });

  describe("Search", () => {
    it("search by keyword", () => {
      const items = [
        { id: "1", content: "get some milk", completed: false },
        { id: "2", content: "buy some bread", completed: true },
        { id: "3", content: "buy some eggs", completed: false },
      ];

      render(<Todo items={items} />);

      const input = screen.getByTestId("search-input");

      act(() => {
        userEvent.type(input, "buy");
      });

      expect(screen.getAllByTestId("todo-item").length).toEqual(2);
    });
  });
});
