import { useEffect, useState } from "react";
import "./App.scss";
import Widget from "./containers/Widget/Widget";

function App() {
  const [matchData, setMatchData] = useState();

  const url =
    "https://odds-api.dev.checkd-dev.com/dev/smartacca/fixtures/7guiizddobmjb28yptfeghcoa/preview";

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
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
