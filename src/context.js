import React, { useState, useEffect, useContext } from "react";
import { wordsArray, chosen } from "./wordsArray";
// import notification function
import { showNotification as displayNotification } from "./helpers/helperFunctions";
import { showProcess } from "./helpers/helperFunctions";

// Create context
const AppContext = React.createContext();
let selectedWord = chosen;

// set up AppProvider
const AppProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [welcome, setWelcome] = useState(true);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [categoryValue, setCategoryValue] = useState(0);

  console.log("selected word from context.js", selectedWord);

  // define keydown event handler function
  useEffect(() => {
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

  // load game function
  function loadGame(event) {
    event.preventDefault();

    if (username === "") {
      displayNotification(setUsernameError);
    } else {
      let categoryChoice = parseInt(event.target[1].value);
      setWelcome(false);
      showProcess(setIsLoading);
      setCategoryValue(categoryChoice);
      console.log("category choice set...");
      playAgain(categoryChoice);
    }

    console.log(categoryValue);
  }

  // play again function
  function playAgain(categoryChoice) {
    setPlay(true);
    setIsExiting(false);

    // reset correct letters and wrong letters array
    setCorrectLetters([]);
    setWrongLetters([]);

    console.log(categoryValue);
    console.log(categoryChoice);

    if (welcome) {
      // reset selected word on welcome
      const randomWord = Math.floor(
        Math.random() * wordsArray[categoryChoice].length
      );
      selectedWord = wordsArray[categoryChoice][randomWord].toLowerCase();
      console.log("selected word from play game...", selectedWord);
    } else {
      // reset selected word on try again
      const randomWord = Math.floor(
        Math.random() * wordsArray[categoryValue].length
      );
      selectedWord = wordsArray[categoryValue][randomWord].toLowerCase();
      console.log("selected word from try again...", selectedWord);
    }
  }

  // exit game
  function exitGame() {
    setPlay(false);
    // setIsExiting(true);
    showProcess(setIsExiting);
    showProcess(setIsLoading);
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
        isLoading,
        isExiting,
        username,
        usernameError,
        categoryValue,
        setUsername,
        setCategoryValue,
        setIsLoading,
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
