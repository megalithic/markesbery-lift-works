import {CLOSED, OPENED} from '../constants/elevator-door.js';
import {IDLE, MOVING} from '../constants/elevator-status.js';

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

  get status() {
    return this._status;
  }
  set status(status) {
    if (this._status !== status) {
      // this._onStatusChange(status);
      this._status = status;
    }
  }

  get door() {
    return this._door;
  }
  set door(door) {
    if (this._door !== door) {
      // this._onDoorChange(door);
      this._door = door;
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
