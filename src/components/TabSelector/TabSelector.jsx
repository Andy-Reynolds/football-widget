// import { useState } from "react";
import "./TabSelector.scss";

const TabSelector = ({ matchData, handleTabClick, tab }) => {
  // const [tab, setTab] = useState("General");

  const homeTeam = matchData.match.contestant[0].code;
  const awayTeam = matchData.match.contestant[1].code;

  // const handleTabClick = (event) => {
  //   const selectedTab = event.target.innerHTML;
  //   setTab(selectedTab);
  // };

  // console.log(tab);

  return (
    <div className="tab-selector">
      <div className="tab-selector__container">
        <button className="tab-selector__tab" onClick={handleTabClick}>
          Overview
        </button>
        <button
          className="tab-selector__tab tab-selector__tab--active"
          onClick={handleTabClick}
        >
          General
        </button>
        <button className="tab-selector__tab" onClick={handleTabClick}>
          {homeTeam}
        </button>
        <button className="tab-selector__tab" onClick={handleTabClick}>
          {awayTeam}
        </button>
        <button className="tab-selector__tab" onClick={handleTabClick}>
          Player
        </button>
      </div>
      <h4 className="tab-selector__heading">{tab}</h4>
    </div>
  );
};

export default TabSelector;
