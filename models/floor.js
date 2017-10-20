export class Floor {
  constructor({floorNumber, id}) {
    this.id = id;
    this.floorNumber = floorNumber;
  }

  get id() {
    return this._id;
  }
  set id(id) {
    if (this._id !== id) {
      this._id = id;
    }
  }

  get floorNumber() {
    return this._floorNumber;
  }
  set floorNumber(floorNumber) {
    if (this._floorNumber !== floorNumber) {
      // this._onFloorNumberChange(floorNumber);
      this._floorNumber = floorNumber;
    }
  }

  summonElevator() {}
}
