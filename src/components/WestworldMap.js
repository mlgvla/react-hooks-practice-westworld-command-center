import React from "react"
import { Segment } from "semantic-ui-react"
import Area from "./Area"

function WestworldMap({ areas }) {
  const areaList = areas.map(area => <Area key={area.id} area={area} />)
  return <Segment id="map">{areaList}</Segment>
}

export default WestworldMap
