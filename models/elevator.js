import {ELEVATOR_DOOR} from '../constants/elevator-door.js';
import {ELEVATOR_DIRECTION} from '../constants/elevator-direction.js';
import {ELEVATOR_STATUS} from '../constants/elevator-status.js';

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
    const targetStatus = ELEVATOR_STATUS[status.toUpperCase()];
    if (this._status.toUpperCase() !== targetStatus) {
      this._onStatusChange(targetStatus);
      this._status = targetStatus;
    }
  }

  get door() {
    return this._door;
  }
  set door(door) {
    const targetDoor = ELEVATOR_DOOR[door.toUpperCase()];
    if (this._door.toUpperCase() !== targetDoor) {
      this._onDoorChange(targetDoor);
      this._door = targetDoor;
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

  get direction() {
    return this._direction;
  }
  set direction(direction) {
    const targetDirection = ELEVATOR_DIRECTION[direction.toUpperCase()];
    if (this._direction.toUpperCase() !== targetDirection) {
      this._onDirectionChange(targetDirection);
      this._direction = targetDirection;
    }
  }

  onDirectionChange(direction) {
    console.log('elevator direction:', direction);
  }

  onStatusChange(status) {
    console.log('elevator status:', status);
  }

  onDoorChange(door) {
    console.log('elevator door:', door);
  }
}
