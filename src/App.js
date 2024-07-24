import React, { useState } from "react";
import TictacToe from "./components/tic_tac_toe";
import Chance from "./components/chance";
import Winner from "./components/winner";
import "./components/tic_tac_toe.css";

const App = () => {
  const [matrix, setMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentUser, setCurrentUser] = useState("x");
  const [isWinnerFound, setWinnerFound] = useState(false);
  const [winner, setWinner] = useState("");

  const findWinner = (mat, user) => {
    // Check horizontal
    for (let i = 0; i < 3; i++) {
      if (
        mat[i][0] === user &&
        mat[i][0] === mat[i][1] &&
        mat[i][1] === mat[i][2]
      )
        return user;
    }

    // Check vertical
    for (let i = 0; i < 3; i++) {
      if (
        mat[0][i] === user &&
        mat[0][i] === mat[1][i] &&
        mat[1][i] === mat[2][i]
      )
        return user;
    }

    // Check diagonal
    if (
      mat[0][0] === user &&
      mat[0][0] === mat[1][1] &&
      mat[1][1] === mat[2][2]
    )
      return user;
    if (
      mat[0][2] === user &&
      mat[0][2] === mat[1][1] &&
      mat[1][1] === mat[2][0]
    )
      return user;

    return "";
  };

  const onCellClick = (row, col) => {
    if (matrix[row][col] === "" && !isWinnerFound) {
      let matrixCopy = matrix.map((row) => row.slice());
      matrixCopy[row][col] = currentUser;
      setMatrix(matrixCopy);

      const winner = findWinner(matrixCopy, currentUser);
      if (winner) {
        setWinnerFound(true);
        setWinner(winner);
      } else {
        setCurrentUser(currentUser === "x" ? "o" : "x");
      }
    }
  };

  const restartGame = () => {
    setMatrix([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentUser("x");
    setWinnerFound(false);
    setWinner("");
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Chance currentUser={currentUser} />
      <TictacToe
        matrix={matrix}
        currentUser={currentUser}
        isWinnerFound={isWinnerFound}
        winner={winner}
        onCellClick={onCellClick}
        onRestart={restartGame}
      />
      {isWinnerFound && <Winner winner={winner} />}
    </div>
  );
};

export default App;
