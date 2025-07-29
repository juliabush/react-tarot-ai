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
  return <form id="tarotUserInput-form" action=""></form>;
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
