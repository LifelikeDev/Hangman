import React from "react";
import { useGlobalContext } from "../context";

const Welcome = () => {
  const {
    setUsername,
    setCategoryValue,
    loadGame,
    username,
    usernameError,
  } = useGlobalContext();
  return (
    <main className="main-wrapper welcome">
      <section className="welcome-wrapper">
        <div className="welcome-screen">
          <h2 className="game-title">Hangman</h2>
          <h3 className="welcome-note">Welcome 👋</h3>
          <form onSubmit={loadGame}>
            <label htmlFor="username">Enter your username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="category">Choose Category</label>
            <select
              name="category"
              onChange={(e) => setCategoryValue(e.target.value)}
            >
              <option value="0">Cars</option>
              <option value="1">Cities</option>
              <option value="2">Languages</option>
              <option value="3">Sports</option>
              <option value="4">Tools</option>
            </select>
            <button type="submit" className="btn">
              Play Game
            </button>
          </form>
        </div>
      </section>
      {usernameError && (
        <article className="notification-wrapper username-error">
          <p>⚠ Please enter your username</p>
        </article>
      )}
    </main>
  );
};

export default Welcome;
