import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({areas}) {
    console.log(areas)
    const areaList = areas.map(area => <Area key={area.id} area={area}/>)
    console.log(areaList)
  return <Segment id="map">{areaList}</Segment>;
}

export default WestworldMap;
