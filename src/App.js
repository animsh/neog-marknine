import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const books = {
    music: {
      "The Sound of Music": 4.5,
      "Rock and Roll All Night": 3.5,
      "Classical Harmonies": 5,
    },
    food: {
      "The Art of Cooking": 4,
      "Delicious Desserts": 4.5,
      "Healthy Eating Guide": 3,
    },
    travel: {
      "Wanderlust Adventures": 5,
      "Discovering New Horizons": 4,
      "Off the Beaten Path": 4.5,
    },
    tedxTalks: {
      "Inspiring Ideas": 4,
      "Innovation and Creativity": 4.5,
      "The Power of Storytelling": 5,
    },
  };

  const [selectedBookType, setSelectedBookType] = useState("music");

  function onBookTypeClickEvent(event) {
    setSelectedBookType(event.target.innerText);
  }

  return (
    <div className="App">
      <h1>📚goodbooks</h1>

      <small>Checkout my favorite books. Select a genre to get started</small>

      <div>
        {Object.keys(books).map((bookType) => {
          return (
            <button
              className="btn-booktypeselector"
              onClick={onBookTypeClickEvent}
            >
              {bookType}
            </button>
          );
        })}
      </div>

      <hr />

      {Object.keys(books[selectedBookType]).map((bookName) => {
        return (
          <li className="list-custom" key={bookName}>
            <h2>{bookName}</h2>
            <p>{books[selectedBookType][bookName]}/5⭐</p>
          </li>
        );
      })}
    </div>
  );
}

export default App;
