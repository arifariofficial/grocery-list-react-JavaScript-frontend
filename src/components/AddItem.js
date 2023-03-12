import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  const inputRef = useRef();
  return (
    <form
      onSubmit={handleSubmit}
      className="flex mt-5 px-32 text-2xl space-x-1"
    >
      <label htmlFor="addItem" className="hidden">
        Add Item
      </label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className=" border-2 border-gray-500 flex-initial w-full px-3 rounded-sm"
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
        className=" bg-purple-200 border-2 border-gray-500 flex-initial  w-9 px-1"
      >
        <FaPlus className="" />
      </button>
    </form>
  );
};

export default AddItem;
