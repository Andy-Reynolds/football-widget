import MatchPeriod from "../MatchPeriod/MatchPeriod";
// import Tab from "../Tab/Tab";
import "./MatchPeriodSelector.scss";

const MatchPeriodSelector = ({ handleMatchPeriodClick, matchPeriod }) => {
  const matchPeriodArr = ["Full Match", "1st Half", "2nd Half"];

  const matchPeriodJSX = matchPeriodArr.map((item) => (
    <MatchPeriod
      key={item}
      selectedMatchPeriod={item}
      active={item === matchPeriod}
      onClick={handleMatchPeriodClick}
    />
  ));

  return (
    <div className="match-period-selector">
      {matchPeriodJSX}
      {/* <button
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
      </button> */}
    </div>
  );
};

export default MatchPeriodSelector;
