// import Components
import Header from "../Components/Header";
import GameIllustration from "../Components/GameIllustration";
import WrongLetters from "../Components/WrongLetters";
import Word from "../Components/Word";
import Popup from "../Components/Popup";
import Notification from "../Components/Notification";
import Copyright from "../Components/Copyright";

const App = () => {
  return (
    <main className="main-wrapper">
      <Header />
      <section className="game-wrapper">
        <div className="illustration-display">
          <GameIllustration />
        </div>
        <div className="word-display">
          <WrongLetters />
          <Word />
        </div>
      </section>
      <Popup />
      <Notification />
      <Copyright />
    </main>
  );
};

export default App;
