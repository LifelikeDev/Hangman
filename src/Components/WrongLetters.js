import React from "react";
import { useGlobalContext } from "../context";

const WrongLetters = () => {
  const { wrongLetters } = useGlobalContext();

  return (
    <article className="wrong-letters__wrapper">
      <div className="wrong-letters">
        {wrongLetters.length > 0 && <p>Failed Attempted Letters</p>}
        <div className="wrong-letters__box">
          {wrongLetters
            .map((letter, index) => <span key={index}>{letter}</span>)
            .reduce(
              (previous, current) =>
                previous === null ? [current] : [previous, ", ", current],
              null
            )}
        </div>
      </div>
    </article>
  );
};

export default WrongLetters;
