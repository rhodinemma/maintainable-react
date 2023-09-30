import { ChangeEvent } from "react";

export const SearchBox = ({
  performSearch,
}: {
  performSearch: (query: string) => void;
}) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    performSearch(e.target.value);
  };

  return (
    <input
      className="todo-input"
      type="text"
      data-testid="search-input"
      onChange={handleSearch}
    />
  );
};
