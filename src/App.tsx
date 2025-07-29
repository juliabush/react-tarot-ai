import { useState } from "react";
import "./App.css";

function CardDisplay() {
  return (
    <div className="cardDisplay-container">
      <h1>hello</h1>
    </div>
  );
}
function TarotUserInput() {
  return (
    <form id="tarotUserInput-form" action="">
      <input
        type="text"
        placeholder="input your question here..."
        id="tarotUserInput-input"
        required
      />
      <button></button>
      <button></button>
    </form>
  );
}

function App() {
  return (
    <div>
      <CardDisplay />
      <TarotUserInput />
    </div>
  );
}

export { App };
