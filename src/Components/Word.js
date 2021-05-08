import React from "react";
import { useGlobalContext } from "../context";

const Word = () => {
  const { selectedWord, correctLetters } = useGlobalContext();

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
      <div className="smartphone__toggle-input">
        <input
          type="text"
          className="toggle-input"
          placeholder="tap here to activate keypad"
          value=""
          onChange={(e) => (e.target.value = "")}
        />
      </div>
    </article>
  );
};

export default Word;
