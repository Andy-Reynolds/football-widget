import Overview from "../Overview/Overview";
import StatsContainer from "../StatsContainer/StatsContainer";
import "./Widget.scss";

const Widget = ({ matchData }) => {
  return (
    <div className="widget">
      <Overview matchData={matchData} />
      <StatsContainer matchData={matchData} />
    </div>
  );
};

export default Widget;
