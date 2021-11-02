function checkWhoWon(props) {
  if (props.ifAllShipsB1 === "All the ships are sunk") {
    return `Board1 has lost the game And ${props.PlayerTwo} is the winner`;
  } else if (
    props.ifAllShipsB2 === "All the ships are sunk" &&
    props.ifAllShipsB1 === "All the ships are sunk"
  ) {
    return "The game has tied";
  } else if (props.ifAllShipsB2 === "All the ships are sunk") {
    return `Board 2 has lost the game And ${props.PlayerOne} is the winner`;
  } else {
    return "No board has won the game yet";
  }
}

export default checkWhoWon;
