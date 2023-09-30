import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoType } from "../types";

const TodoInput = ({
  onItemAdded,
}: {
  onItemAdded: (todo: TodoType) => void;
}) => {
  const [content, setContent] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const id = uuid();
      onItemAdded({ id, content, completed: false, favorite: false });
    }
  };

  return (
    <input
      className="todo-input"
      type="text"
      placeholder="Type to add item, enter to confirm"
      data-testid="todo-input"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export { TodoInput };
