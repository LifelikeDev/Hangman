// import React states
import React, { useState, useEffect } from "react";
// import Components
import Header from "./Components/Header";
import GameIllustration from "./Components/GameIllustration";
import WrongLetters from "./Components/WrongLetters";
import Word from "./Components/Word";
import Popup from "./Components/Popup";
import Notification from "./Components/Notification";
// import notification function
import { showNotification as displayNotification } from "./helpers/helperFunctions";

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
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // define keydown event handler function
    const handleKeydownEvent = (event) => {
      const { key, keyCode } = event;
      // checking for alphabet keys on the keyboard
      if (play && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        // current letter is found in the selected word
        if (selectedWord.includes(letter)) {
          // current letter has not already been entered
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            displayNotification(setShowNotification);
          }
        } else {
          // current letter has not been recorded as wrong
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            displayNotification(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeydownEvent);

    return () => window.removeEventListener("keydown", handleKeydownEvent);
  }, [play, correctLetters, wrongLetters]);

  // play again function
  function playAgain() {
    // set play to true
    setPlay(true);

    // reset correct letters and wrong letters array
    setCorrectLetters([]);
    setWrongLetters([]);

    // reset selected word
    const randomWord = Math.floor(Math.random() * wordsArray.length);
    selectedWord = wordsArray[randomWord];
  }

  return (
    <main className="main-wrapper">
      <Header />
      <section className="game-wrapper">
        <div className="illustration-display">
          <GameIllustration wrongLetters={wrongLetters} />
        </div>
        <div className="word-display">
          <WrongLetters wrongLetters={wrongLetters} />
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div>
      </section>
      <Popup
        selectedWord={selectedWord}
        correctLetters={correctLetters}
        setPlay={setPlay}
        wrongLetters={wrongLetters}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </main>
  );
};

export default App;
