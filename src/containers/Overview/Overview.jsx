import "./Overview.scss";

const Overview = () => {
  return (
    <div className="overview">
      <h3 className="overview__league">Premier League</h3>
      <div className="overview__info">
        <div className="overview__teams">
          <div className="overview__team">
            <h2 className="overview__team-name">Liverpool</h2>
          </div>
          <div className="overview__team">
            <h2 className="overview__team-name">Crystal Palace</h2>
          </div>
        </div>
        <div className="overview__result-container">
          <div className="overview__ft">FT</div>
          <div className="overview__scores">
            <div>2</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
