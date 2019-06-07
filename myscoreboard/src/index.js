import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

const title = "Scoreboard";
const PLAYERS = [
  { id: 0, name: "Cj Pesco", score: 33 },
  { id: 1, name: "Joyce Pauline Tantuan", score: 63 },
  { id: 2, name: "Mommy", score: 35 }
];

ReactDOM.render(
  <App title={title} players={PLAYERS} />,
  document.getElementById("root")
);
