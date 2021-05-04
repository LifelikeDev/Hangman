import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <article className="wrong-letters__wrapper">
      <div className="wrong-letters">
        {wrongLetters.length > 0 && <p>Failed Attempted Letters</p>}
        {wrongLetters
          .map((letter, index) => <span key={index}>{letter}</span>)
          .reduce(
            (previous, current) =>
              previous === null ? [current] : [previous, ", ", current],
            null
          )}
      </div>
    </article>
  );
};

export default WrongLetters;
