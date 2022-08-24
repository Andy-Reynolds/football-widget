import { useEffect, useState } from "react";
import "./App.scss";
import Widget from "./containers/Widget/Widget";

function App() {
  const [matchData, setMatchData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const url =
    "https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview";

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setMatchData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {isLoading ? <h1>Loading...</h1> : <Widget matchData={matchData} />}
    </div>
  );
}

export default App;
