import TabSelector from "../../components/TabSelector/TabSelector";
import "./StatsContainer.scss";
import { useState } from "react";

const StatsContainer = ({ matchData }) => {
  const [tab, setTab] = useState("General");

  const handleTabClick = (event) => {
    const selectedTab = event.target.innerHTML;
    setTab(selectedTab);
  };

  console.log(tab);

  return (
    <div className="stats-container">
      <TabSelector
        matchData={matchData}
        handleTabClick={handleTabClick}
        tab={tab}
      />
    </div>
  );
};

export default StatsContainer;
