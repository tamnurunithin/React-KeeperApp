import React from "react";
import Notes from "./Notes";

function Body({ notes }) {
  return (
    <div>
      {notes.map((note) => (
        <Notes title={note.title} content={note.content} />
      ))}
    </div>
  );
}

export default Body;
