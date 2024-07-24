import React from "react";

const Chance = ({ currentUser }) => {
  return (
    <div className="chance">
      <p>Current Turn: {currentUser.toUpperCase()}</p>
    </div>
  );
};

export default Chance;
