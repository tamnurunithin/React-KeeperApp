import React from "react";

function Notes({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Notes;
