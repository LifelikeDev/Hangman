import React from "react";
import { useGlobalContext } from "../context";

const Loading = () => {
  const { username, isExiting } = useGlobalContext();

  return (
    <main className="main-wrapper welcome">
      {isExiting ? (
        <section className="welcome-wrapper loading">
          <h3 className="welcome-note">
            Goodbye <span className="username__loading">{username}</span> 👋
          </h3>
          <h2 className="game-title">Exiting Game...</h2>
        </section>
      ) : (
        <section className="welcome-wrapper loading">
          <h3 className="welcome-note">
            Welcome <span className="username__loading">{username}</span> 👋
          </h3>
          <h2 className="game-title">Loading Game...</h2>
        </section>
      )}
    </main>
  );
};

export default Loading;
