export class Building {
  constructor({elevators, floors}) {
    this.floors = floors;
    this.elevators = elevators;
  }

  get floorCount() {
    return this.floors().length;
  }

  get floors() {
    return this._floors;
  }
  set floors(floors) {
    if (this._floors !== floors) {
      // this._onFloorsChange(floors);
      this._floors = floors;
    }
  }

  get elevators() {
    return this._elevators;
  }
  set elevators(elevators) {
    if (this._elevators !== elevators) {
      // this._onElevatorsChange(elevators);
      this._elevators = elevators;
    }
  }
}
