import React, { useState } from "react";

const Note = ({ item, handleDelete, index }) => {
  const deleteNotes = () => {
    handleDelete(index);
  };

  return (
    <div className="flex flex-col justify-between h-40 bg-yellow-500 rounded p-2 relative">
      <li className=" text-gray-100 w-30 flex flex-col break-words">{item}</li>

      <div>
        <button
          onClick={deleteNotes}
          type="button"
          className=" absolute top-28 left-72 hover:text-white w-20  text-yellow-500 border bg-white hover:bg-yellow-500 focus:outline-none font-medium rounded text-sm px-5 py-2 text-center mr-2 mb-2 ml-2 dark:border-yellow-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
