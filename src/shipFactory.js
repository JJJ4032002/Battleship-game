const methodsObj = {
  hit: function (position) {
    let index = this.arr.findIndex((x) => x === position);
    if (index === -1) {
      this.arr.push(position);
      this.length--;
      return "The ship has been hit";
    } else {
      return "This position has already been hit";
    }
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
  let arr = [];
  let ShipObj = Object.assign(Object.create(methodsObj), {
    length,
    ShipLength,
    arr,
  });
  return ShipObj;
}

export { ship };
