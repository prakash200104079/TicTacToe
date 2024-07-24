import React from "react";
import "./tic_tac_toe.css";

const TictacToe = ({
  matrix,
  currentUser,
  isWinnerFound,
  winner,
  onCellClick,
  onRestart,
}) => {
  return (
    <>
      <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => onCellClick(rowIndex, colIndex)}
                  className="cell"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onRestart}>Restart Game</button>
    </>
  );
};

export default TictacToe;
