import {Building} from './models/building.js';
import {Elevator} from './models/elevator.js';
import {Floor} from './models/floor.js';

import {IDLE, MOVING} from './constants/elevator-statuses.js';

import uuid from 'uuid';

export default class Simulation {
  constructor(props) {}

  init() {
    const opts = process.argv;
    const floorCount = process.argv[2];
    const elevatorCount = process.argv[3];

    const floors = Array.from(new Array(floorCount), (val, index) => {
      return new Floor({
        floorNumber: index + 1,
        id: uuid(),
      });
    });

    const elevators = Array.from(new Array(elevatorCount), (val, index) => {
      return new Elevator({
        elevatorNumber: index + 1,
        id: uuid(),
        status: IDLE,
      });
    });

    const building = new Building({
      elevators,
      floors,
    });
  }
}
