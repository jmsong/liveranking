import React from "react";
import ReactDOM from "react-dom";
import { DashBoard, Errors } from "./components";

import "./styles/styles.css";
import { useFetch } from "./api";

function App() {
  const { data, loading, errors } = useFetch(
    "https://webcdn.17app.co/campaign/pretest/data.json"
  );

  if (errors) {
    return <Errors errors={errors} />;
  }
  return <DashBoard loading={loading} streamers={data} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
