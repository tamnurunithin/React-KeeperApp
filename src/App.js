import React from "react";
import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import Notes from "./NotesData";

function App() {
  return (
    <div>
      <Head />
      <Body notes={Notes} />
      <Footer />
    </div>
  );
}

export default App;
