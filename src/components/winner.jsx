import React from "react";

const Winner = ({ winner }) => {
  return (
    <div className="winner">
      <p>Winner: {winner.toUpperCase()}</p>
    </div>
  );
};

export default Winner;
