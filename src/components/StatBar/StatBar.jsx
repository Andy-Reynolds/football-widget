import "./StatBar.scss";

const StatBar = () => {
  return (
    <div className="stat-bar">
      <div className="stat-bar__info-container">
        <h5 className="stat-bar__info">50.3%</h5>
        <h5 className="stat-bar__info">Possession</h5>
        <h5 className="stat-bar__info">49.7%</h5>
      </div>
      <div className="stat-bar__bars-container">
        <div className="stat-bar__background">
          <div className="stat-bar__meter stat-bar__meter--home"></div>
        </div>
        <div className="stat-bar__background">
          <div className="stat-bar__meter stat-bar__meter--away"></div>
        </div>
      </div>
    </div>
  );
};

export default StatBar;
