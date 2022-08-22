import "./MatchPeriodSelector.scss";

const MatchPeriodSelector = ({ handleMatchPeriodClick }) => {
  return (
    <div className="match-period-selector">
      <button
        className="match-period-selector__button match-period-selector__button--active"
        onClick={handleMatchPeriodClick}
      >
        Full Match
      </button>
      <button
        className="match-period-selector__button"
        onClick={handleMatchPeriodClick}
      >
        1st Half
      </button>
      <button
        className="match-period-selector__button"
        onClick={handleMatchPeriodClick}
      >
        2nd Half
      </button>
    </div>
  );
};

export default MatchPeriodSelector;
