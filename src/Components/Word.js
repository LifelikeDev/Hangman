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
    </article>
  );
};

export default Word;
