const methodsObj = {
  hit: function () {
    this.length--;
    return "The ship has been hit";
  },
  isSunk: function () {
    if (this.length === 0) {
      return "Oh the ship has been sunk";
    } else {
      return "The ship has not been sunk yet";
    }
  },
};

function ship(length) {
  let ShipLength = length;
  let ShipObj = Object.assign(Object.create(methodsObj), {
    length,
    ShipLength,
  });
  return ShipObj;
}

export { ship };
