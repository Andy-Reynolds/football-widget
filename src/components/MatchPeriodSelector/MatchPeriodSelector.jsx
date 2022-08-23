import MatchPeriod from "../MatchPeriod/MatchPeriod";
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

  return <div className="match-period-selector">{matchPeriodJSX}</div>;
};

export default MatchPeriodSelector;
