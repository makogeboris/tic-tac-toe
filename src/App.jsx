import { useEffect, useState } from "react";
import NewGame from "./components/NewGame";
import GameStart from "./components/GameStart";
import RestartGame from "./components/RestartGame";
import GameResults from "./components/GameResults";

function App() {
  const [showRestartModal, setShowRestartModal] = useState(false);

  function openRestartModal() {
    setShowRestartModal(true);
  }

  function closeRestartModal() {
    setShowRestartModal(false);
  }

  useEffect(() => {
    if (showRestartModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showRestartModal]);

  return (
    <main>
      {/* <NewGame /> */}
      <GameStart openRestartModal={openRestartModal} />
      <GameResults />
      {/* {showRestartModal && (
        <RestartGame closeRestartModal={closeRestartModal} />
      )} */}
    </main>
  );
}

export default App;
