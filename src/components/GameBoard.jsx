import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import xTurn from "../assets/icon-x-turn.svg";
import oTurn from "../assets/icon-o-turn.svg";
import xSymbol from "../assets/icon-x.svg";
import oSymbol from "../assets/icon-o.svg";
import xOutline from "../assets/icon-x-outline.svg";
import oOutline from "../assets/icon-o-outline.svg";
import restartIcon from "../assets/icon-restart.svg";

function Square({ value, onSquareClick, isXNext, disabled }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(false);
  }, [value]);

  return (
    <button
      onClick={onSquareClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      className="bg-semi-dark-navy xs:size-[8.75rem] xs:rounded-2xl rounded-10 grid size-24 w-full cursor-pointer place-content-center shadow-lg transition-all disabled:cursor-not-allowed"
    >
      {value === "X" && (
        <img className="xs:size-16 size-10" src={xSymbol} alt="X" />
      )}
      {value === "O" && (
        <img className="xs:size-16 size-10" src={oSymbol} alt="O" />
      )}
      {!value && isHovered && !disabled && (
        <img
          className="xs:size-16 size-10"
          src={isXNext ? xOutline : oOutline}
          alt=""
        />
      )}
    </button>
  );
}

function GameBoard({ openRestartModal, playerSymbol, gameMode, onGameEnd }) {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ X: 0, O: 0, ties: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const [boardKey, setBoardKey] = useState(0);

  const cpuSymbol = playerSymbol === "X" ? "O" : "X";
  const isPlayerTurn = xIsNext ? playerSymbol === "X" : playerSymbol === "O";

  useEffect(() => {
    if (
      gameMode === "cpu" &&
      playerSymbol === "O" &&
      squares.every((sq) => sq === null)
    ) {
      setTimeout(() => {
        makeCPUMove(squares);
      }, 500);
    }
  }, [gameMode, playerSymbol]);

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i] || isProcessing) {
      return;
    }

    if (gameMode === "cpu" && !isPlayerTurn) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(nextSquares);
    const isBoardFull = nextSquares.every((sq) => sq !== null);

    if (winner) {
      setIsProcessing(true);
      setTimeout(() => {
        setScores((prev) => ({
          ...prev,
          [winner]: prev[winner] + 1,
        }));

        let resultType = "win";
        if (gameMode === "cpu") {
          resultType = winner === playerSymbol ? "win" : "lose";
        } else {
          resultType = "win";
        }

        onGameEnd({ winner, type: resultType });
        resetGame();
        setIsProcessing(false);
      }, 1000);
      return;
    }

    if (isBoardFull) {
      setIsProcessing(true);
      setTimeout(() => {
        setScores((prev) => ({
          ...prev,
          ties: prev.ties + 1,
        }));
        onGameEnd({ winner: null, type: "tie" });
        resetGame();
        setIsProcessing(false);
      }, 1000);
      return;
    }

    if (gameMode === "cpu") {
      setIsProcessing(true);
      setTimeout(() => {
        makeCPUMove(nextSquares);
        setIsProcessing(false);
      }, 500);
    }
  }

  function makeCPUMove(currentSquares) {
    const emptySquares = currentSquares
      .map((sq, idx) => (sq === null ? idx : null))
      .filter((idx) => idx !== null);
    if (emptySquares.length === 0 || calculateWinner(currentSquares)) return;

    const isXTurn = currentSquares.filter((sq) => sq !== null).length % 2 === 0;
    const currentSymbol = isXTurn ? "X" : "O";

    let move =
      findWinningMove(currentSquares, cpuSymbol) ||
      findWinningMove(currentSquares, playerSymbol) ||
      (currentSquares[4] === null ? 4 : null) ||
      [0, 2, 6, 8].find((i) => currentSquares[i] === null) ||
      emptySquares[0];

    const nextSquares = currentSquares.slice();
    nextSquares[move] = currentSymbol;
    setSquares(nextSquares);
    setXIsNext(!isXTurn);

    const winner = calculateWinner(nextSquares);
    const isBoardFull = nextSquares.every((sq) => sq !== null);

    if (winner) {
      setIsProcessing(true);
      setTimeout(() => {
        setScores((prev) => ({
          ...prev,
          [winner]: prev[winner] + 1,
        }));

        const resultType = winner === playerSymbol ? "win" : "lose";
        onGameEnd({ winner, type: resultType });
        resetGame();
        setIsProcessing(false);
      }, 1000);
    } else if (isBoardFull) {
      setIsProcessing(true);
      setTimeout(() => {
        setScores((prev) => ({
          ...prev,
          ties: prev.ties + 1,
        }));
        onGameEnd({ winner: null, type: "tie" });
        resetGame();
        setIsProcessing(false);
      }, 1000);
    }
  }

  function findWinningMove(squares, player) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      const vals = [squares[a], squares[b], squares[c]];
      if (
        vals.filter((v) => v === player).length === 2 &&
        vals.includes(null)
      ) {
        return line[vals.indexOf(null)];
      }
    }
    return null;
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setBoardKey((prev) => prev + 1);

    if (gameMode === "cpu" && playerSymbol === "O") {
      setTimeout(() => {
        makeCPUMove(Array(9).fill(null));
      }, 500);
    }
  }

  const winner = calculateWinner(squares);
  const isDisabled =
    winner || isProcessing || (gameMode === "cpu" && !isPlayerTurn);

  return (
    <div className="xs:my-36 mx-auto my-0 mt-6 mb-32 flex max-w-[31.75rem] flex-col px-6">
      <div className="flex items-center justify-between">
        <img className="" src={logo} alt="XO" />

        <div className="bg-semi-dark-navy xs:rounded-10 xs:min-w-[8.75rem] xs:min-h-[3.25rem] xs:px-7 xs:pt-3 xs:pb-4 xs:gap-3 flex size-10 min-w-[6.3125rem] items-center gap-2 rounded-sm px-3 pt-2 pb-3 shadow-sm">
          <img src={xIsNext ? xTurn : oTurn} alt="" />

          <span className="text-silver xs:text-base xs:tracking-widest text-sm font-bold tracking-wide uppercase">
            Turn
          </span>
        </div>

        <button
          onClick={openRestartModal}
          className="bg-silver focus:outline-light-blue-500 shadow-silver xs:size-[3.25rem] xs:rounded-10 hover:bg-silver-light grid size-10 cursor-pointer place-content-center rounded-sm transition-all focus-visible:outline focus-visible:outline-offset-2"
        >
          <img src={restartIcon} alt="" />
        </button>
      </div>
      <div
        key={boardKey}
        className="xs:mt-5 mt-16 grid grid-cols-3 grid-rows-3 place-items-center gap-3"
        role="group"
        aria-label="Tic Tac Toe board"
      >
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          isXNext={xIsNext}
          disabled={isDisabled}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          isXNext={xIsNext}
          disabled={isDisabled}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          isXNext={xIsNext}
          disabled={isDisabled}
        />
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          isXNext={xIsNext}
          disabled={isDisabled}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          isXNext={xIsNext}
          disabled={isDisabled}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          isXNext={xIsNext}
          disabled={isDisabled}
        />
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          isXNext={xIsNext}
          disabled={isDisabled}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          isXNext={xIsNext}
          disabled={isDisabled}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          isXNext={xIsNext}
          disabled={isDisabled}
        />
      </div>

      <div className="xs:gap-0 mt-5 flex items-center justify-between gap-3">
        <div className="bg-light-blue-500 xs:rounded-2xl xs:px-6 xs:py-3 xs:max-w-[8.75rem] rounded-10 flex w-full min-w-[6rem] flex-col items-center px-4 py-2">
          <span className="text-dark-navy xs:text-base xs:tracking-wider text-center text-xs font-normal tracking-wide uppercase">
            X{" "}
            {playerSymbol === "X"
              ? "(You)"
              : gameMode === "cpu"
                ? "(CPU)"
                : "(P2)"}
          </span>
          <span className="text-dark-navy xs:text-2xl text-center text-xl font-bold tracking-widest uppercase">
            {scores.X}
          </span>
        </div>

        <div className="bg-silver xs:rounded-2xl xs:py-3 xs:px-6 xs:max-w-[8.75rem] rounded-10 flex w-full min-w-[6rem] flex-col items-center px-4 py-2">
          <span className="text-dark-navy xs:text-base xs:tracking-wider text-center text-xs font-normal tracking-wide uppercase">
            Ties
          </span>
          <span className="text-dark-navy xs:text-2xl text-center text-xl font-bold tracking-widest uppercase">
            {scores.ties}
          </span>
        </div>

        <div className="bg-light-yellow-500 xs:rounded-2xl xs:py-3 xs:px-6 xs:max-w-[8.75rem] rounded-10 flex w-full min-w-[6rem] flex-col items-center px-4 py-2">
          <span className="text-dark-navy xs:text-base xs:tracking-wider text-center text-xs font-normal tracking-wide uppercase">
            O{" "}
            {playerSymbol === "O"
              ? "(You)"
              : gameMode === "cpu"
                ? "(CPU)"
                : "(P2)"}
          </span>
          <span className="text-dark-navy xs:text-2xl text-center text-xl font-bold tracking-widest uppercase">
            {scores.O}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
