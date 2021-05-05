import React, { useEffect } from "react";
import { checkWinStatus } from "../helpers/helperFunctions";

const Popup = ({
  correctLetters,
  wrongLetters,
  setPlay,
  selectedWord,
  playAgain,
}) => {
  let winStatusHeadline = "";
  let winStatusSubline = "";
  let play = true;

  // check game status and render popup message
  if (checkWinStatus(correctLetters, wrongLetters, selectedWord) === "win") {
    winStatusHeadline = "You Won!";
    winStatusSubline = "You saved Hangman.";
    play = false;
  } else if (
    checkWinStatus(correctLetters, wrongLetters, selectedWord) === "loss"
  ) {
    winStatusHeadline = "You lost!";
    winStatusSubline = "Hangman died.";
    play = false;
  }

  useEffect(() => setPlay(play));

  return (
    <section
      className={`popup-wrapper ${winStatusHeadline !== "" ? "reveal" : ""}`}
    >
      <div className="popup">
        <h2 className="game-status headline">{winStatusHeadline}</h2>
        <h2 className="game-status subline">{winStatusSubline}</h2>
        {winStatusHeadline === "You lost!" && (
          <p className="word-revealer">
            The given word was{" "}
            <span className="revealed-word">{selectedWord}</span>
          </p>
        )}
        <button className="btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </section>
  );
};

export default Popup;
