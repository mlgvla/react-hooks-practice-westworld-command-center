import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({hosts}) {

    const hostCards = hosts.map(host => <Host host={host}/>)
  return (
    <Card.Group itemsPerRow={6}>{hostCards}</Card.Group>
  );
}

export default HostList;
