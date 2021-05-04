import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
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
