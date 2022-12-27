function CheckWinner(props) {
  if (props.ifAllShipsB1 === "All the ships are sunk") {
    return `Player Board has lost the game And ${props.Enemy} is the winner`;
  } else if (
    props.ifAllShipsB2 === "All the ships are sunk" &&
    props.ifAllShipsB1 === "All the ships are sunk"
  ) {
    return "The game has tied";
  } else if (props.ifAllShipsB2 === "All the ships are sunk") {
    return `Enemy Board has lost the game And ${props.User} is the winner`;
  } else {
    return "No board has won the game yet";
  }
}

export default CheckWinner;
