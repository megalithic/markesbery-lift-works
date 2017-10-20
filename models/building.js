export class Building {
  constructor({bottomFloor, elevators, floors, topFloor}) {
    this.floors = floors;
    this.elevators = elevators;

    // set initially, but unchangeable thereafter
    this._topFloor = topFloor;
    this._bottomFloor = bottomFloor;
  }

  // @type
  //   integer
  // @attribute
  get floorCount() {
    return this.floors().length;
  }

  // @type
  //   integer
  // @attribute
  get topFloor() {
    return this._topFloor;
  }

  // @type
  //   integer
  // @attribute
  get bottomFloor() {
    return this._bottomFloor;
  }

  // @type
  //   <Array>[<Floor>]
  // @attribute
  get floors() {
    return this._floors;
  }
  set floors(floors) {
    if (this._floors !== floors) {
      this._floors = floors;
    }
  }

  // @type
  //   <Array>[<Elevator>]
  // @attribute
  get elevators() {
    return this._elevators;
  }
  set elevators(elevators) {
    if (this._elevators !== elevators) {
      this._elevators = elevators;
    }
  }

  toggleElevatorDoor(elevator, door) {
    // TODO: likely need to do a `find` on the collection
    this.elevators[elevator].door = !door;
  }

  toggleElevatorStatus(elevator, status) {
    // TODO: likely need to do a `find` on the collection
    this.elevators[elevator].status = !status;
  }

  // moves given elevator
  // - to target floor,
  // - in given direction, and
  // - checks to make sure we haven't gone above or below our min/max floor values
  // - updates elevator status before and after movement
  moveElevator(elevator, targetFloor, direction) {}
}
