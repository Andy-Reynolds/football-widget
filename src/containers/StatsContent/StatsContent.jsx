import MatchPeriodSelector from "../../components/MatchPeriodSelector/MatchPeriodSelector";
import StatBarsContainer from "../StatBarsContainer/StatBarsContainer";

const StatsContent = ({
  handleMatchPeriodClick,
  matchPeriod,
  matchData,
  tab,
}) => {
  switch (tab) {
    case "General":
      return (
        <>
          <MatchPeriodSelector
            handleMatchPeriodClick={handleMatchPeriodClick}
            matchPeriod={matchPeriod}
          />
          <StatBarsContainer matchData={matchData} matchPeriod={matchPeriod} />
        </>
      );
    case "Overview":
      return <h3>{tab} Data</h3>;
    case "GER":
      return <h3>{tab} Data</h3>;
    case "FRA":
      return <h3>{tab} Data</h3>;
    case "Player":
      return <h3>{tab} Data</h3>;
    default:
      return <h3>Data Not Found</h3>;
  }
};

export default StatsContent;
