function validPlacementShip(
  element,
  length,
  ArrToBeCopied,
  ArrToBeCopiedFrom,
  board,
  axisDecider
) {
  if (length <= 5) {
    let ClashedEleArr = validateTheArr(
      element,
      axisDecider,
      ArrToBeCopied,
      length
    );
    if (ClashedEleArr.length === 0) {
      board.placeShip(length, element.id, "DummyBoard", axisDecider);
      ArrToBeCopied = [...ArrToBeCopied, ...ArrToBeCopiedFrom];
      length++;
    } else {
      console.log("Ship not placed");
    }
  }
  return { length, ArrToBeCopied };
}

function validateTheArr(element, axisDecider, ArrToBeCopied, length) {
  let BlockCount = 0;
  let arrToValidate = [];
  let tempEle = element;
  let tempId = element.id;
  while (BlockCount < length) {
    arrToValidate.push(tempEle);
    if (axisDecider) {
      tempId++;
    } else {
      tempId = Number(tempId) + 10;
    }
    tempEle = document.querySelector(`[data-box = "DummyBoard${tempId}"]`);
    BlockCount++;
  }
  const ValidatedArr = arrToValidate.filter((e) => {
    return ArrToBeCopied.includes(e);
  });

  return ValidatedArr;
}

export default validPlacementShip;
