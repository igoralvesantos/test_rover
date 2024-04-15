import Position from './Position';

class Rover {
  private _position: Position;

  constructor(position: Position) {
    this._position = position;
  }

  get position(): Position {
    return this._position;
  }

  set position(position: Position) {
    this._position = position;
  }
}

export default Rover;
