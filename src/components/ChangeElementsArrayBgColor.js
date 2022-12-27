function ChangeElementsArrayBgColor(arr, color) {
  arr.forEach((e) => {
    e.style["background-color"] = `${color}`;
  });
}
export default ChangeElementsArrayBgColor;
