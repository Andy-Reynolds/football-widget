import "./StatBar.scss";

const StatBar = ({ type, homeStat, awayStat }) => {
  return (
    <div className="stat-bar">
      <div className="stat-bar__info-container">
        <h5 className="stat-bar__info">{homeStat}</h5>
        <h5 className="stat-bar__info">{type}</h5>
        <h5 className="stat-bar__info">{awayStat}</h5>
      </div>
      <div className="stat-bar__bars-container">
        <div className="stat-bar__background">
          <div
            className="stat-bar__meter stat-bar__meter--home"
            style={{
              width: `calc(100% * ${homeStat} / (${homeStat} + ${awayStat}))`,
            }}
          ></div>
        </div>
        <div className="stat-bar__background">
          <div
            className="stat-bar__meter stat-bar__meter--away"
            style={{
              width: `calc(100% * ${awayStat} / (${homeStat} + ${awayStat}))`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatBar;
