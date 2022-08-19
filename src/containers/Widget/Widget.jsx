import Overview from "../Overview/Overview";
import StatsContainer from "../StatsContainer/StatsContainer";
import "./Widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      <Overview />
      <StatsContainer />
    </div>
  );
};

export default Widget;
