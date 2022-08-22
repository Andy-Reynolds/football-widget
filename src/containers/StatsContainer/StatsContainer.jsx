import TabSelector from "../../components/TabSelector/TabSelector";
import "./StatsContainer.scss";
import { useState } from "react";
import MatchPeriodSelector from "../../components/MatchPeriodSelector/MatchPeriodSelector";

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

  console.log(tab);
  console.log(matchPeriod);

  return (
    <div className="stats-container">
      <TabSelector
        matchData={matchData}
        handleTabClick={handleTabClick}
        tab={tab}
      />
      <MatchPeriodSelector handleMatchPeriodClick={handleMatchPeriodClick} />
    </div>
  );
};

export default StatsContainer;
