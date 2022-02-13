import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host}) {
  const {imageUrl} = host
    console.log(host)
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className="host selected"
      onClick={/* On Click what? */ null}
      image={imageUrl}
      raised
      link
    />
  );
}

export default Host;
