import { useEffect, useState } from "react";
import GameMenu from "./components/GameMenu";
import GameBoard from "./components/GameBoard";
import GameResults from "./components/GameResults";
import RestartGame from "./components/RestartGame";

function App() {
  const [showRestartModal, setShowRestartModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState("X");
  const [gameMode, setGameMode] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [restartTrigger, setRestartTrigger] = useState(0);

  function openRestartModal() {
    setShowRestartModal(true);
  }

  function closeRestartModal() {
    setShowRestartModal(false);
  }

  function handleRestart() {
    setRestartTrigger((prev) => prev + 1);
  }

  function handleGameEnd(result) {
    setGameResult(result);
    setShowResultsModal(true);
  }

  function closeResultsModal() {
    setShowResultsModal(false);
    setGameResult(null);
  }

  function quitGame() {
    setShowResultsModal(false);
    setGameStarted(false);
    setGameMode(null);
    setGameResult(null);
  }

  function startGame(mode, symbol) {
    setGameMode(mode);
    setPlayerSymbol(symbol);
    setGameStarted(true);
  }

  function returnToMenu() {
    setGameStarted(false);
    setGameMode(null);
  }

  useEffect(() => {
    if (showRestartModal || showResultsModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showRestartModal, showResultsModal]);

  return (
    <main>
      {!gameStarted ? (
        <GameMenu onStartGame={startGame} />
      ) : (
        <GameBoard
          key={restartTrigger}
          openRestartModal={openRestartModal}
          playerSymbol={playerSymbol}
          gameMode={gameMode}
          returnToMenu={returnToMenu}
          onGameEnd={handleGameEnd}
        />
      )}
      {showRestartModal && (
        <RestartGame
          closeRestartModal={closeRestartModal}
          onRestart={handleRestart}
        />
      )}
      {showResultsModal && gameResult && (
        <GameResults
          result={gameResult}
          gameMode={gameMode}
          onQuit={quitGame}
          onNextRound={closeResultsModal}
        />
      )}
    </main>
  );
}

export default App;
