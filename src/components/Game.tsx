import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: string[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const handleResetMovesAndGoToGameStart = (nextMove: number) => {
    setCurrentMove(nextMove);
    setHistory([Array(0)]);
  };

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => handleResetMovesAndGoToGameStart(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex justify-center gap-8 p-12">
      <div className="">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="flex direction-column">
        <ol className="game-info list-decimal pl-5">{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
