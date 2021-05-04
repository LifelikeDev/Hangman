import React from "react";

const Popup = () => {
  return (
    <section className="popup-wrapper">
      <div className="popup">
        <h2 className="game-status"></h2>
        <h3 className="word-reveal"></h3>
        <button className="btn">Retry</button>
      </div>
    </section>
  );
};

export default Popup;
