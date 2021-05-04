import React, { useState } from "react";
import Header from "./Components/Header";
import GameIllustration from "./Components/GameIllustration";
import WrongLetters from "./Components/WrongLetters";
import Word from "./Components/Word";
import Popup from "./Components/Popup";
import Notification from "./Components/Notification";

const wordsArray = [
  "computing",
  "code",
  "algorithms",
  "interface",
  "server",
  "database",
  "language",
  "refactor",
  "destructure",
];
let selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

const App = () => {
  const [play, setPlay] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <main className="main-wrapper">
      <Header />
      <section className="game-wrapper">
        <div className="illustration-display">
          <GameIllustration />
        </div>
        <div className="word-display">
          <WrongLetters wrongLetters={wrongLetters} />
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div>
      </section>
      <Popup />
      <Notification />
    </main>
  );
};

export default App;
