import TabSelector from "../../components/TabSelector/TabSelector";
import "./StatsContainer.scss";
import { useState } from "react";
import MatchPeriodSelector from "../../components/MatchPeriodSelector/MatchPeriodSelector";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import StatBarsContainer from "../StatBarsContainer/StatBarsContainer";
import StatBar from "../../components/StatBar/StatBar";

const StatsContainer = ({ matchData }) => {
  const [tab, setTab] = useState("General");
  const [matchPeriod, setMatchPeriod] = useState("Full Match");
  const [isGeneral, setIsGeneral] = useState(true);

  const handleTabClick = (event) => {
    const selectedTab = event.target.innerHTML;
    setTab(selectedTab);
    if (selectedTab === "General") {
      setIsGeneral(true);
    } else {
      setIsGeneral(false);
    }
  };

  const handleMatchPeriodClick = (event) => {
    const selectedTab = event.target.innerHTML;
    setMatchPeriod(selectedTab);
  };

  console.log(tab);
  console.log(matchPeriod);
  console.log(isGeneral);

  return (
    <div className="stats-container">
      <TabSelector
        matchData={matchData}
        handleTabClick={handleTabClick}
        tab={tab}
      />
      {isGeneral ? (
        <>
          <MatchPeriodSelector
            handleMatchPeriodClick={handleMatchPeriodClick}
          />
          <StatBarsContainer />
        </>
      ) : (
        <DataNotFound />
      )}
    </div>
  );
};

export default StatsContainer;
