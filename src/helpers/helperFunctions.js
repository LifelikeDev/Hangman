// function for showing notification if key has been already entered
function showNotification(setter) {
  // set passed-in setter function to true
  setter(true);

  // set passed-in setter function to false after 3 seconds
  setTimeout(() => {
    setter(false);
  }, 3000);
}

// game status check

function checkWinStatus(correct, wrong, word) {
  let status = "win";

  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // check for loss based on number of chances it takes to lose
  if (wrong.length === 5) status = "loss";

  return status;
}

export { showNotification, checkWinStatus };
