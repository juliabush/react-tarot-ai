import { useState } from "react"

import "./App.css";

function WebsiteTitle() {
  return (
  <h1 className="websitetitle-title">Ask Tarot AI Anything</h1>
  );
}
function CardDisplay() {
  return <div className="cardDisplay"></div>;
}

function TarotUserInput() {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Learning about rebase')
    console.log(userInput)

    try {
      const response = await fetch("http://localhost:5000/api/tarot", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ question: userInput }),
      });

      const data = await response.json();
      console.log("Server response:", data);
    } catch (err) {
      console.error("Error sending data:", err);
    }
  };

  return (
    <form id="tarotUserInput-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="input your question here..."
        id="tarotUserInput"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        required
      />
      <button type="submit" id="tarotUserInput-submitbutton">
        &#x27A1;
      </button>
      <button type="button" className="tarotUserInput-instructionsbutton" onClick={() => alert("Ask a clear question and find out what tarot thinks...")}>
      &#x1F4CB;
      </button>
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
