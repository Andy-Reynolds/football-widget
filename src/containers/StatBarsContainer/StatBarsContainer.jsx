import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import StatBar from "../../components/StatBar/StatBar";
import "./StatBarsContainer.scss";

const StatBarsContainer = ({ matchData, matchPeriod }) => {
  const [key, setKey] = useState("value");

  const homeStats = matchData.match.liveData.lineups.home.stats;
  const awayStats = matchData.match.liveData.lineups.away.stats;

  useEffect(() => {
    if (matchPeriod === "Full Match") {
      setKey("value");
    } else if (matchPeriod === "1st Half") {
      setKey("fh");
    } else if (matchPeriod === "2nd Half") {
      setKey("sh");
    }
  }, [matchPeriod]);

  return (
    <div className="stat-bars-container">
      <StatBar
        type={"Possession"}
        homeStat={homeStats[3][key]}
        awayStat={awayStats[1][key]}
      />
      <StatBar
        type={"Shots"}
        homeStat={homeStats[0][key]}
        awayStat={awayStats[3][key]}
      />
      <StatBar
        type={"Shots"}
        homeStat={homeStats[1][key]}
        awayStat={awayStats[2][key]}
      />
      <StatBar
        type={"Corners"}
        homeStat={homeStats[2][key]}
        awayStat={awayStats[4][key]}
      />
      <div className="stat-bars-container__cards-container">
        <Cards homeStat={homeStats[4][key]} awayStat={awayStats[0][key]} />
      </div>
    </div>
  );
};

export default StatBarsContainer;
