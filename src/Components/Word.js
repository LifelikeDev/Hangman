import React from "react";
import { useGlobalContext } from "../context";

const Word = () => {
  const {
    selectedWord,
    correctLetters,
    activatedPad,
    typedLetters,
    setTypedLetters,
    setActivatedPad,
  } = useGlobalContext();

  function showKeypad() {
    setActivatedPad(true);
  }

  return (
    <article className="word-wrapper">
      <div className="word">
        {selectedWord.split("").map((letter, index) => {
          return (
            <span key={index} className="letter">
              {correctLetters.includes(letter) ? letter : ""}
            </span>
          );
        })}
      </div>
      <div
        className={`smartphone__toggle-input ${activatedPad ? "clicked" : ""}`}
      >
        <input
          type="text"
          className="toggle-input"
          placeholder="tap here to activate keypad"
          value={typedLetters}
          onChange={(e) => setTypedLetters(e.target.value)}
          onFocus={showKeypad}
        />
      </div>
    </article>
  );
};

export default Word;
