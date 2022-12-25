function FillArrayWithCoordinates() {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    let coordinate = "";
    if (i < 10) {
      coordinate = "0" + i;
    } else {
      coordinate = String(i);
    }
    arr.push(coordinate);
  }
  return arr;
}

export default FillArrayWithCoordinates;
