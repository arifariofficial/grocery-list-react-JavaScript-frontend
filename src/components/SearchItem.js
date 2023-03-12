import React from "react";

export const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className="mt-9 mx-2 flex flex-row border-2 border-gray-900 w-fit rounded-sm shadow-sm "
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="search" className="hidden">
        Search
      </label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3"
      />
    </form>
  );
};

export default SearchItem;
