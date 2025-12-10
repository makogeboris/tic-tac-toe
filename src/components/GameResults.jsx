import xSymbol from "../assets/icon-x.svg";
import oSymbol from "../assets/icon-o.svg";

function GameResults({ result, gameMode, onQuit, onNextRound }) {
  const { winner, type } = result;

  let message = "";
  let colorClass = "";

  if (type === "tie") {
    message = "Round Tied";
    colorClass = "text-silver";
  } else if (type === "win") {
    if (gameMode === "cpu") {
      message = "You won!";
    } else {
      message = winner === "X" ? "Player 1 wins!" : "Player 2 wins!";
    }
    colorClass =
      winner === "X" ? "text-light-blue-500" : "text-light-yellow-500";
  } else if (type === "lose") {
    message = "Oh no, you lost...";
    colorClass =
      winner === "X" ? "text-light-blue-500" : "text-light-yellow-500";
  }

  return (
    <>
      <div className="bg-semi-dark-navy fixed top-1/2 left-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center py-11">
        {type !== "tie" && (
          <p className="text-silver text-center text-base font-bold tracking-wider uppercase">
            {message}
          </p>
        )}

        <div className="mt-4 flex items-center gap-2 sm:gap-6">
          {type !== "tie" && (
            <img
              className="size-10 sm:size-16"
              src={winner === "X" ? xSymbol : oSymbol}
              alt=""
            />
          )}

          <h2
            className={`${colorClass} text-center text-2xl leading-12 font-bold tracking-[1px] uppercase sm:text-[2.5rem] sm:tracking-[2.5px]`}
          >
            {type === "tie" ? "Round Tied" : "Takes the round"}
          </h2>
        </div>

        <div className="items center mt-6 flex gap-4">
          <button
            onClick={onQuit}
            className="text-dark-navy rounded-10 shadow-silver focus-visible:outline-light-blue-500 hover:bg-silver-light bg-silver cursor-pointer px-4 py-3.5 text-center text-base font-bold tracking-wider uppercase transition-all focus-visible:outline focus-visible:outline-offset-2"
          >
            Quit
          </button>

          <button
            onClick={onNextRound}
            className="text-dark-navy rounded-10 hover:bg-light-yellow-100 focus-visible:outline-light-blue-500 bg-light-yellow-500 shadow-yellow-sm cursor-pointer px-4 py-3.5 text-center text-base font-bold tracking-wider uppercase transition-all focus-visible:outline focus-visible:outline-offset-2"
          >
            Next Round
          </button>
        </div>
      </div>
      <div className="fixed inset-0 z-10 h-full w-full bg-black opacity-[0.5] mix-blend-normal backdrop-blur-sm transition-all duration-500"></div>
    </>
  );
}

export default GameResults;
