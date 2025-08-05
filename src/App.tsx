import { useState } from "react";
import tarot0 from "./assets/Tarot_00_Fool.webp";
import tarot1 from "./assets/2nd card.webp";
import tarot2 from "./assets/Tarot_03_Empress.webp";
import "./App.css";

function WebsiteTitle() {
  return <h1>Ask Tarot AI anything</h1>;
}
function CardDisplay() {
  return (
    <div className="cardDisplay">
      <img src={tarot0} alt="" />
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
      <button className="tarotUserInput-instructionsbutton"></button>
    </form>
  );
}

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
