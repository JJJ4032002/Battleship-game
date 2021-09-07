function elementCreator(type, properties) {
  let ele = document.createElement(type);
  for (let prop in properties) {
    ele[prop] = properties[prop];
  }
  return ele;
}
export default elementCreator;
