function ChangeColorBlocks(e, shipCount, arr) {
  let i = 0;
  console.log(e);

  while (i < shipCount) {
    e.style["background-color"] = "#6eeb5e";
    arr.push(e);
    e = e.nextElementSibling;

    i++;
  }
}

export default ChangeColorBlocks;
