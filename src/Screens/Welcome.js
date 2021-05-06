import React from "react";
import { useGlobalContext } from "../context";

const Welcome = () => {
  const { setUsername, loadGame, username, usernameError } = useGlobalContext();
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
            <select name="category">
              <option value="cars">Cars</option>
              <option value="cities">Cities</option>
              <option value="languages">Languages</option>
              <option value="sports">Sports</option>
              <option value="tools">Tools</option>
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
