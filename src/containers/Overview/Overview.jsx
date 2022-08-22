import "./Overview.scss";

const Overview = ({ matchData }) => {
  return (
    <div className="overview">
      <h3 className="overview__league">
        {matchData.match.meta.competition.name}
      </h3>
      <div className="overview__info">
        <div className="overview__teams">
          <div className="overview__team">
            <img
              className="overview__badge"
              src="https://cdn.fantasyiteam.com/bethub/teams/150x150/x0vuldayagbmwazqjgbozu0v.png"
              alt="Germany badge"
            />
            <h2 className="overview__team-name">
              {matchData.match.contestant[0].name}
            </h2>
          </div>
          <div className="overview__team">
            <img
              className="overview__badge"
              src="https://cdn.fantasyiteam.com/bethub/teams/150x150/185xqd7s06sm2t85sxzfkrl.png"
              alt="France badge"
            />
            <h2 className="overview__team-name">
              {matchData.match.contestant[1].name}
            </h2>
          </div>
        </div>
        <div className="overview__result-container">
          <div className="overview__ft">FT</div>
          <div className="overview__scores">
            <div>{matchData.match.liveData.matchDetails.scores.ft.home}</div>
            <div>{matchData.match.liveData.matchDetails.scores.ft.away}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
