function PlaceAtPosition(e) {
  let StringNum = this.position.toString();

  if (e.id === StringNum && this.ShipCount < this.ShipLength) {
    if (this.BoardId !== "Board2") {
      e.style["background-color"] = "#6eeb5e";
    }

    e.setAttribute("data-ship", this.ShipLength);
    if (this.axisDecider) {
      this.position++;
    } else {
      this.position = Number(this.position) + 10;
    }

    this.ShipCount++;
  }
}

export default PlaceAtPosition;
