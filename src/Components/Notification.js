import React from "react";

const Notification = ({ showNotification }) => {
  return (
    showNotification && (
      <article className="notification-wrapper">
        <p>⚠ You have already entered this letter</p>
      </article>
    )
  );
};

export default Notification;
