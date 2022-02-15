import React, { useState, useEffect } from "react"
import { Segment } from "semantic-ui-react"
import "../stylesheets/App.css"
import WestWorldMap from "./WestworldMap"
import Headquarters from "./Headquarters"

function App() {
  const [hosts, setHosts] = useState([])
  const [areas, setAreas] = useState([])
  const [selectedHostId, setselectedHostId] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then(r => r.json())
      .then(data => setHosts(data))

    fetch("http://localhost:3001/areas")
      .then(r => r.json())
      .then(data => setAreas(data))
  }, [])

  function handleHostClick(host) {
    setselectedHostId(host.id)
  }

  const selectedHost = hosts.find(host => host.id === selectedHostId)


  // who is selected and who is not.  We are adding a selected property to the host object
  const formattedHosts = hosts.map(host => ({
    ...host,
    selected: host.id === selectedHostId,
  }))

  // we want to see who is inactive by checking the active property.  This list will be sent to headquarters as hosts.  This includes the one selected host
  const inactiveHosts = formattedHosts.filter(host => !host.active)
  return (
    <Segment id="app">
      <WestWorldMap areas={areas} />
      <Headquarters
        hosts={inactiveHosts}
        onHostClick={handleHostClick}
        selectedHost={selectedHost}
      />
    </Segment>
  )
}

export default App
