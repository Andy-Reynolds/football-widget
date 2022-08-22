import StatBar from "../../components/StatBar/StatBar";
import "./StatBarsContainer.scss";

const StatBarsContainer = ({ matchData, matchPeriod }) => {
  const homeStats = matchData.match.liveData.lineups.home.stats;
  const awayStats = matchData.match.liveData.lineups.away.stats;

  console.log(homeStats);
  console.log(awayStats);

  return (
    <div className="stat-bars-container">
      <StatBar
        type={"Possession"}
        homeStat={homeStats[3].value}
        awayStat={awayStats[1].value}
      />
      <StatBar
        type={"Shots"}
        homeStat={homeStats[0].value}
        awayStat={awayStats[3].value}
      />
      <StatBar
        type={"Shots"}
        homeStat={homeStats[1].value}
        awayStat={awayStats[2].value}
      />
      <StatBar
        type={"Corners"}
        homeStat={homeStats[2].value}
        awayStat={awayStats[4].value}
      />
    </div>
  );
};

export default StatBarsContainer;
