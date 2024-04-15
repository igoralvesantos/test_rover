import Coordinates from "./Coordinates";
import Position from "./Position";

class Plateau {
  private readonly _minCoordinates: Coordinates;
  private readonly _maxCoordinates: Coordinates;

  constructor(minCoordinates: Coordinates, maxCoordinates: Coordinates) {
    this._minCoordinates = minCoordinates;
    this._maxCoordinates = maxCoordinates;
  }

  get minCoordinates(): Coordinates {
    return this._minCoordinates;
  }

  get maxCoordinates(): Coordinates {
    return this._maxCoordinates;
  }

  isOffLimits(position: Position): boolean {
    return (
      position.x < this.minCoordinates.x ||
      position.x > this.maxCoordinates.x ||
      position.y < this.minCoordinates.y ||
      position.y > this.maxCoordinates.y
    );
  }
}

export default Plateau;
