function ChangeColorBlocks(e, shipCount, arr) {
  let i = 0;
  let j = 0;
  let startVal = e.id;
  let endVal = ChangeNum(e.id);
  //Calculating if ship can be placed in the row. The total should always be lesser or equal to endVal to be placed.
  while (j < shipCount - 1) {
    startVal++;
    j++;
  }

  while (i < shipCount) {
    if (startVal < endVal) {
      e.style["background-color"] = "#6eeb5e";
    } else if (startVal === endVal) {
      e.style["background-color"] = "#6eeb5e";
    } else {
      e.style["background-color"] = "#de524e";
    }

    arr.push(e);
    if (Number(e.id) < 99) {
      e = e.nextElementSibling;
    } else {
      console.log("Do not update");
    }

    i++;
  }
  function ChangeNum(num) {
    num = num.toString();
    let arr = [...num];
    num = "";
    arr[1] = "9";
    arr.forEach((e) => {
      num += e;
    });
    return Number(num);
  }
}

export default ChangeColorBlocks;
