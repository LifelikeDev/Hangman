import React from "react";
import { useGlobalContext } from "../context";

const Word = () => {
  const { selectedWord, correctLetters } = useGlobalContext();

  return (
    <article className="word">
      {selectedWord.split("").map((letter, index) => {
        return (
          <span key={index} className="letter">
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </article>
  );
};

export default Word;
