import React, { useState } from "react";

function App() {
  const [headingtext, setHeadingText] = useState("Hi");
  const [color, setColor] = useState("");

  function handeClickOver() {
    console.log("button Over");
    setColor("red");
  }
  function handeClickOut() {
    console.log("button out");
    setColor("blue");
  }

  return (
    <div className="container">
      <h1>{headingtext}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ background: color }}
        onMouseOut={handeClickOut}
        onMouseOver={handeClickOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
