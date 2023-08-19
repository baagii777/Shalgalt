import React from "react";

const SearchBar = ({ filterText, onFilterTextChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={filterText}
      onChange={(e) => onFilterTextChange(e.target.value)}
    />
  );
};

export default SearchBar;
