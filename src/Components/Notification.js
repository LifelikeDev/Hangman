import React from "react";
import { useGlobalContext } from "../context";

const Notification = () => {
  const { showNotification } = useGlobalContext();

  return (
    showNotification && (
      <article className="notification-wrapper">
        <p>⚠ You have already entered this letter</p>
      </article>
    )
  );
};

export default Notification;
