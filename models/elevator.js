export class Elevator {
  constructor(props) {}

  get id() {
    return this._id;
  }
  set id(id) {
    if (this._id !== id) {
      this._id = id;
    }
  }

  get elevatorNumber() {
    return this._elevatorNumber;
  }
  set elevatorNumber(elevatorNumber) {
    if (this._elevatorNumber !== elevatorNumber) {
      // this._onElevatorNumberChange(elevatorNumber);
      this._elevatorNumber = elevatorNumber;
    }
  }

  get direction() {}
  set direction(direction) {
    if (this._direction !== direction) {
      // this._onDirectionChange(direction);
      this._direction = direction;
    }
  }
}
