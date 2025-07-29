import { useState } from "react";
import {} from "./assets/Tarot_00_Fool.webp";
import {} from "./assets/2nd card.webp";
import {} from "./assets/Tarot_03_Empress.webp";
import "./App.css";

function CardDisplay() {
  return (
    <div className="cardDisplay-container">
      <img src="" alt="" />
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
      <button type="submit" id="tarotUserInput-submitbutton"></button>
      <button className="tarotUerInput-instructionsbutton"></button>
    </form>
  );
}

function App() {
  return (
    <div className="website-container">
      <TarotUserInput />
      <div className="cardDisplay-container">
        <div className="cardDisplay-flexbox">
          <CardDisplay />
          <CardDisplay />
          <CardDisplay />
        </div>
      </div>
    </div>
  );
}

export { App };
