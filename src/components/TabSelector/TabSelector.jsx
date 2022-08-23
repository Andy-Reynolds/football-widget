import Tab from "../Tab/Tab";
import "./TabSelector.scss";

const TabSelector = ({ matchData, handleTabClick, tab }) => {
  const homeTeam = matchData.match.contestant[0].code;
  const awayTeam = matchData.match.contestant[1].code;

  const tabsArr = ["Overview", "General", homeTeam, awayTeam, "Player"];

  const tabsJSX = tabsArr.map((tabItem) => (
    <Tab
      key={tabItem}
      tabName={tabItem}
      active={tabItem === tab}
      onClick={handleTabClick}
    />
  ));

  return (
    <div className="tab-selector">
      <div className="tab-selector__container">{tabsJSX}</div>
      <h4 className="tab-selector__heading">{tab}</h4>
    </div>
  );
};

export default TabSelector;
