import React, { useState, useEffect, useMemo } from "react";
import { useInterval } from "../utils";
import List from "./List";

export function DashBoard(props) {
  function generateRandomData(data) {
    const count = data.length;
    const index = Math.floor(Math.random() * count);
    const clonedData = data.slice();
    clonedData[index].score += Math.floor(Math.random() * 5000);
    return clonedData;
  }

  const [randomData, setRandomData] = useState(null);

  useEffect(() => {
    setRandomData(props.streamers);
  }, [props.streamers]);

  const sortedData = useMemo(() => {
    if (!randomData) return props.streamers;
    return randomData.sort((a, b) => b.score - a.score);
  }, [props.streamers, randomData]);

  useInterval(() => {
    setRandomData(generateRandomData(props.streamers));
  }, 300);

  return (
    <div className="app">
      {props.loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <List id="topten" title="Top 10" streamers={sortedData} />
      )}
    </div>
  );
}

export default DashBoard;
