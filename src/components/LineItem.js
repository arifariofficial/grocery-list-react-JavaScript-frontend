import React from "react";
import { FiDelete } from "react-icons/fi";

export const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="bg-purple-200  flex justify-between gap-x-12 text-2xl p-2 shadow-md rounded-lg">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
        className="w-6 "
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FiDelete
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex={0}
        aria-label={`Delete ${item.item}`}
        className="my-1 text-gray-600 flex "
      />
    </li>
  );
};
