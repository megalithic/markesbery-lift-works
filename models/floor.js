import PubSub from 'pubsub-js';

export class Floor {
  constructor({floorNumber, id}) {
    this.id = id;
    this.floorNumber = floorNumber;
  }

  // @type
  //   uuid
  // @attribute
  get id() {
    return this._id || null;
  }

  set id(id) {
    if (this._id !== id) {
      this._id = id;
    }
  }

  // @type
  //   integer
  // @attribute
  get floorNumber() {
    return this._floorNumber;
  }
  set floorNumber(floorNumber) {
    if (this._floorNumber !== floorNumber) {
      this._floorNumber = floorNumber;
    }
  }

  requestElevator(targetFloor, direction) {
    PubSub.publish('requestElevator', {
      requestingFloor: this.floorNumber,
      targetFloor,
      direction,
    });
  }
}
