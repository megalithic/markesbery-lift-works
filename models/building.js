export class Building {
  constructor({bottomFloor, elevators, floors, topFloor}) {
    this.floors = floors;
    this.elevators = elevators;

    // set initially, but unchangeable thereafter
    this._topFloor = topFloor;
    this._bottomFloor = bottomFloor;
  }

  get floorCount() {
    return this.floors().length;
  }

  get topFloor() {
    return this._topFloor;
  }

  get bottomFloor() {
    return this._bottomFloor;
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

  moveElevator(floor, direction) {}
}
