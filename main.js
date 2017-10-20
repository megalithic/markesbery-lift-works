import {Building} from './models/building.js';
import {Elevator} from './models/elevator.js';
import {Floor} from './models/floor.js';

import {CLOSED, OPENED} from './constants/elevator-door.js';
import {IDLE, MOVING} from './constants/elevator-status.js';

import uuid from 'uuid';

export default class Simulation {
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
        door: CLOSED,
        id: uuid(),
        status: IDLE,
      });
    });
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
  }
}
