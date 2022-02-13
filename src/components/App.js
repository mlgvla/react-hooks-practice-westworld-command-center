import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestWorldMap from "./WestworldMap"
import Headquarters from "./Headquarters"

function App() {
    const [hosts, setHosts] = useState([]);
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/hosts")
        .then(r => r.json())
        .then(data => setHosts(data))

        fetch("http://localhost:3001/areas")
        .then(r => r.json())
        .then(data => setAreas(data))
    }, []);


  return (
    <Segment id="app">
        <WestWorldMap areas={areas} />
        <Headquarters hosts={hosts} />
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
    </Segment>
  );
}

export default App;
