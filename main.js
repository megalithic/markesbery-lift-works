import {Building} from './models/building.js';
import {Elevator} from './models/elevator.js';
import {Floor} from './models/floor.js';

import {ELEVATOR_DOOR} from './constants/elevator-door.js';
import {ELEVATOR_STATUS} from './constants/elevator-status.js';

import uuid from 'uuid';

export default class Simulation {
  get building() {
    return this._building;
  }

  set building(building) {
    if (this._building !== building) {
      this._building = building;
    }
  }

  init() {
    const opts = process.argv;
    const floorCount = opts[2];
    const elevatorCount = opts[3] || 1;
    const floors = this.generateFloors(floorCount);
    const elevators = this.generateElevators(elevatorCount);

    const building = new Building({
      bottomFloor: 1,
      elevators,
      floors,
      topFloor: floors.length - 1,
    });

    if (building) {
      this.building = building;
    }
  }

  generateFloors(floorCount) {
    Array.from(new Array(floorCount), (val, index) => {
      return new Floor({
        floorNumber: index + 1,
        id: uuid(),
      });
    });
  }

  generateElevators(elevatorCount) {
    Array.from(new Array(elevatorCount), (val, index) => {
      return new Elevator({
        elevatorNumber: index + 1,
        door: ELEVATOR_DOOR.CLOSED,
        id: uuid(),
        status: ELEVATOR_STATUS.IDLE,
      });
    });
  }

  // requests an elevator
  // - will determine closest elevator,
  // - based on direction needed, and
  // - return elevator to use
  requestElevator(requestingFloor, direction) {}

  // moves elevator
  // - will move given elevator,
  // - to target floor,
  // - with known direction, and
  // - return tuple with elevator status, door, and current floor
  moveElevator(elevator, targetFloor, direction) {}

  toggleElevatorDoor(elevator, door) {}

  toggleElevatorStatus(elevator, status) {}
}
