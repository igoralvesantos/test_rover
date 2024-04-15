export enum CardinalDirections {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}

class Position {
  private _x: number;
  private _y: number;
  private _cardinalDirection: CardinalDirections;

  constructor(x: number, y: number, cardinalDirection: CardinalDirections) {
    this._x = x;
    this._y = y;
    this._cardinalDirection = cardinalDirection;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get cardinalDirection(): CardinalDirections {
    return this._cardinalDirection;
  }

  get formattedPositionString(): string {
    return `${this._x} ${this._y} ${this._cardinalDirection}`;
  }

  set x(value: number) {
    this._x = value;
  }

  set y(value: number) {
    this._y = value;
  }

  set cardinalDirection(value: CardinalDirections) {
    this._cardinalDirection = value;
  }
}

export default Position;
