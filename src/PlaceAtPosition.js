function PlaceAtPosition(e) {
  let StringNum = this.position.toString();

  if (e.id === StringNum && this.ShipCount < this.ShipLength) {
    if (this.BoardId === "Board1") {
      e.style["background-color"] = "#6eeb5e";
    }

    e.setAttribute("data-ship", this.ShipLength);
    this.position++;
    this.ShipCount++;
  }
}

export default PlaceAtPosition;
