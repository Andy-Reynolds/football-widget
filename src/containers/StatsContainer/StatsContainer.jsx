import TabSelector from "../../components/TabSelector/TabSelector";
import "./StatsContainer.scss";
import { useState } from "react";
import StatsContent from "../StatsContent/StatsContent";

const StatsContainer = ({ matchData }) => {
  const [tab, setTab] = useState("General");
  const [matchPeriod, setMatchPeriod] = useState("Full Match");

  const handleTabClick = (event) => {
    const selectedTab = event.target.innerHTML;
    setTab(selectedTab);
  };

  const handleMatchPeriodClick = (event) => {
    const selectedTab = event.target.innerHTML;
    setMatchPeriod(selectedTab);
  };

  return (
    <div className="stats-container">
      <TabSelector
        matchData={matchData}
        handleTabClick={handleTabClick}
        tab={tab}
      />
      <StatsContent
        handleMatchPeriodClick={handleMatchPeriodClick}
        matchPeriod={matchPeriod}
        matchData={matchData}
        tab={tab}
      />
    </div>
  );
};

export default StatsContainer;
