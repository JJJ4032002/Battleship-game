function ChangeColorBlocks(e, shipCount, arr, btn) {
  let i = 0;
  let j = 0;
  let SqrColor = e.id;
  let startVal = e.id;
  let endVal = ChangeNum(e.id, btn);
  //Calculating if ship can be placed in the row. The total should always be lesser or equal to endVal to be placed.
  if (btn) {
    while (j < shipCount - 1) {
      startVal++;
      j++;
    }
  } else {
    while (j < shipCount - 1) {
      startVal = Number(startVal) + 10;
      j++;
    }
  }

  while (i < shipCount) {
    console.log(startVal);
    console.log(endVal);
    if (startVal < endVal) {
      e.style["background-color"] = "#6eeb5e";
    } else if (startVal === endVal) {
      e.style["background-color"] = "#6eeb5e";
    } else {
      e.style["background-color"] = "#de524e";
    }

    arr.push(e);
    if (Number(e.id) < 99 && btn) {
      e = e.nextElementSibling;
    } else if (Number(e.id) < 99 && Number(e.id) < endVal && !btn) {
      SqrColor = Number(SqrColor) + 10;
      let nextEl = document.body.querySelector(
        `[data-box-number = "${SqrColor}"]`
      );
      e = nextEl;
    } else {
      console.log("Do not update");
    }

    i++;
  }
}

function ChangeNum(num, btn) {
  let numToStr = num.toString();

  let arr = [...numToStr];
  if (btn) {
    if (num <= 9) {
      arr[0] = "9";
    } else {
      arr[1] = "9";
    }
  } else {
    if (num <= 9) {
      let temp = arr[0];
      arr[0] = "9";
      arr[1] = temp;
    } else {
      arr[0] = "9";
    }
  }

  num = "";

  arr.forEach((e) => {
    num += e;
  });
  return Number(num);
}

export default ChangeColorBlocks;
