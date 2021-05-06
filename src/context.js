import React, { useState, useEffect, useContext } from "react";
import wordsArray from "./wordsArray";
// import notification function
import { showNotification as displayNotification } from "./helpers/helperFunctions";

// Create context
const AppContext = React.createContext();
let selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

// set up AppProvider
const AppProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [welcome, setWelcome] = useState(true);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  useEffect(() => {
    // define keydown event handler function
    const handleKeydownEvent = (event) => {
      const { key, keyCode } = event;
      // checking for alphabet keys on the keyboard
      if (play && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        // current letter is found in the selected word
        if (selectedWord.includes(letter)) {
          // current letter has not already been entered
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            displayNotification(setShowNotification);
          }
        } else {
          // current letter has not been recorded as wrong
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            displayNotification(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeydownEvent);

    return () => window.removeEventListener("keydown", handleKeydownEvent);
  }, [play, correctLetters, wrongLetters]);

  // play again function
  function playAgain() {
    // set play to true
    setPlay(true);

    // reset correct letters and wrong letters array
    setCorrectLetters([]);
    setWrongLetters([]);

    // reset selected word
    const randomWord = Math.floor(Math.random() * wordsArray.length);
    selectedWord = wordsArray[randomWord];
  }

  // load game function
  function loadGame(event) {
    event.preventDefault();

    if (username === "") {
      //   window.alert("Please enter your username");
      displayNotification(setUsernameError);
    } else {
      setWelcome(false);
      playAgain();
    }

    // setUsername(value);
    console.log(username);
  }

  // exit game
  function exitGame() {
    setPlay(false);
    setWelcome(true);
  }

  return (
    <AppContext.Provider
      value={{
        wrongLetters,
        correctLetters,
        selectedWord,
        showNotification,
        welcome,
        username,
        usernameError,
        setUsername,
        loadGame,
        exitGame,
        playAgain,
        setPlay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// useGlobalContext custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
