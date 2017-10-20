import {Building} from './models/building.js';
import {Elevator} from './models/elevator.js';
import {Floor} from './models/floor.js';

import {ELEVATOR_DOOR} from './constants/elevator-door.js';
import {ELEVATOR_STATUS} from './constants/elevator-status.js';

import uuid from 'uuid';

export default class Simulation {
  constructor() {
    // TODO: setup pub/sub to listen to elevator requests from a specific floor
  }

  // @type
  //   <Building>
  // @attribute
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
  // - in response to an event requesting the elevator from a particular floor
  // - for known building,
  // - will determine closest elevator,
  // - based on direction needed, and
  // - return elevator to use
  requestElevator(targetFloor, direction) {
    // TODO: slight change, it makes more sense to have the floor notify when
    // an elevator is needed. So we will need to have a given floor to fire the
    // request.
    //
    // An event is responded to from the Simulation to tell the building to
    // move the elevator to that requestingFloor.

    const requestingFloor = null; // see above TODO
    const elevator = closestElevator(requestingFloor, targetFloor, direction);

    this.moveElevator(elevator, targetFloor, direction);
  }

  // moves elevator
  // - for known building,
  // - will move given elevator,
  // - to target floor,
  // - with known direction, and
  // - return tuple with elevator status, door, and current floor
  moveElevator(elevator, targetFloor, direction) {
    this.building.moveElevator(elevator, targetFloor, direction);
  }

  // toggles elevator door (OPENED|CLOSED)
  // - for known building, and
  // - given elevator,
  // - will toggle given door value
  toggleElevatorDoor(elevator, door) {
    this.building.toggleElevatorDoor(elevator, door);
  }

  // toggles elevator status (MOVING|IDLE)
  // - for known building, and
  // - given elevator,
  // - will toggle given status value
  toggleElevatorStatus(elevator, status) {
    this.building.toggleElevatorStatus(elevator, status);
  }
}
