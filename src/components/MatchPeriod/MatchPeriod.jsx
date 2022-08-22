import React from "react";

const MatchPeriod = ({ active, selectedMatchPeriod, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? "match-period-selector__button match-period-selector__button--active"
          : "match-period-selector__button"
      }
    >
      {selectedMatchPeriod}
    </button>
  );
};

export default MatchPeriod;
