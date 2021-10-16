function checkWhoWon(props) {
  if (props.ifAllShipsB1 === "All the ships are sunk") {
    return "Board1 has lost the game";
  } else if (
    props.ifAllShipsB2 === "All the ships are sunk" &&
    props.ifAllShipsB1 === "All the ships are sunk"
  ) {
    return "The game has tied";
  } else if (props.ifAllShipsB2 === "All the ships are sunk") {
    return "Board 2 has lost the game";
  } else {
    return "No board has one the game yet";
  }
}

export default checkWhoWon;
