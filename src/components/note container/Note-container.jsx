import React from "react";
import "./Note-container.css";
import Note from "../note/note";
import { Fragment, useState } from "react";
const NoteContainer = ({ formSubmit, li, handleDelete, SearchValue , remaining , setRemaining }) => {
  
  const handleRemaining = (event) => {
    setRemaining(192 - event.target.value.length);
  };
  return (
    <ul className="grid grid-cols-4 mt-12 gap-3">
      {li.map((item, index) => (
        <Fragment key={`item-${index}`}>
          {(!SearchValue || item.indexOf(SearchValue) > -1) && (
            <Note
              li={li}
              handleDelete={handleDelete}
              item={item}
              index={index}
            />
          )}
        </Fragment>
      ))}

      <form className=" relative" onSubmit={formSubmit}>
        <textarea
          placeholder="leave a note..."
          className=" resize-none z-10 leave h-40 placeholder-gray-100 p-2 bg-yellow-500 rounded focus:outline-none"
          name="leave"
          maxLength={192}
          cols="30"
          rows="20"
          onChange={handleRemaining}
        ></textarea>

        <div>
          <span className=" absolute bottom-2 left-2 text-white">
            {`${remaining} remaining`}
          </span>
          <button
            type="submit"
            className="absolute bottom-0 right-0 bg-white  text-yellow-400 hover:text-white border hover:bg-yellow-500 focus:outline-none font-medium rounded text-sm px-5 py-2 text-center mr-2 mb-2 ml-2 dark:border-yellow-300"
          >
            Add
          </button>
        </div>
      </form>
    </ul>
  );
};

export default NoteContainer;
