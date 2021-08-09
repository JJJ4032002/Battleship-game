function PlaceAtPosition(e) {
  let StringNum = this.position.toString();

  if (e.id === StringNum && this.ShipCount < this.ShipLength) {
    e.textContent = "S";
    e.setAttribute("data-ship", this.ShipLength);
    this.position++;
    this.ShipCount++;
  }
}

export default PlaceAtPosition;
