import "./Overview.scss";

const Overview = ({ matchData }) => {
  console.log(matchData.match.contestant[0].name);

  return (
    <div className="overview">
      <h3 className="overview__league">
        {matchData.match.meta.competition.name}
      </h3>
      <div className="overview__info">
        <div className="overview__teams">
          <div className="overview__team">
            <h2 className="overview__team-name">
              {matchData.match.contestant[0].name}
            </h2>
          </div>
          <div className="overview__team">
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
