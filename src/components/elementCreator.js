function ElementCreator(type, properties) {
  let ele = document.createElement(type);
  for (let prop in properties) {
    if (prop === "textContent") {
      ele.textContent = ele[prop];
    }
    ele[prop] = properties[prop];
  }
  return ele;
}
export default ElementCreator;
