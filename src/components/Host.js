import React from "react"
import { Card } from "semantic-ui-react"
import "../stylesheets/Host.css"

function Host({ host, onHostClick }) {
  const { imageUrl, selected } = host

  /* NOTE: The className "host selected" renders a different style than simply "host". */
  function handleClick() {
    onHostClick(host)
  }
  return (
    <Card
      className={selected ? "host selected" : "host"}
      onClick={handleClick}
      image={imageUrl}
      raised
      link
    />
  )
}

export default Host
