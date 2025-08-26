// import { useEffect, useState } from "react";

import "./App.css";

function WebsiteTitle() {
  return <h1 className="websitetitle-title">Ask Tarot AI anything</h1>;
}
function CardDisplay() {
  return <div className="cardDisplay"></div>;
}

function TarotUserInput() {
  return (
    <form id="tarotUserInput-form" action="POST">
      <input
        type="text"
        placeholder="input your question here..."
        id="tarotUserInput"
        required
      />
      <button type="submit" id="tarotUserInput-submitbutton">
        Submit
      </button>
      <button className="tarotUserInput-instructionsbutton">
        Instructions
      </button>
    </form>
  );
}
const sendTarotInput = await fetch("http://localhost:3000/userinput", {
  method: "POST",
});

function App() {
  return (
    <div className="website-container">
      <WebsiteTitle />
      <TarotUserInput />
      <span className="cardDisplay-container">
        <div className="cardDisplay-flexbox">
          <CardDisplay />
          <CardDisplay />
          <CardDisplay />
        </div>
      </span>
    </div>
  );
}

export { App };
