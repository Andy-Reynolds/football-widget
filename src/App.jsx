import { useEffect, useState } from "react";
import "./App.scss";
import Widget from "./containers/Widget/Widget";
import mockData from "./assets/mockData/data";

function App() {
  const [matchData, setMatchData] = useState(mockData);

  const url =
    "https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview";

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setMatchData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Widget matchData={matchData} />
    </div>
  );
}

export default App;
