function checkWhoWon(boards, position1, shipLength1, position2, shipLength2) {
  console.log(boards, position1, shipLength1, position2, shipLength2);
  let stat1 = boards.newBoard1.receiveAttack(position1, shipLength1);

  let stat2 = boards.newBoard2.receiveAttack(position2, shipLength2);
  console.log(stat1, stat2);
}

export default checkWhoWon;
