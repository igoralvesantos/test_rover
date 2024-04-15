import Plateau from "../entities/Plateau";
import Position, { CardinalDirections } from "../entities/Position";
import Rover from "../entities/Rover";

export enum Commands {
  Move = "M",
  RotateLeft = "L",
  RotateRight = "R",
}

export enum RotationDirections {
  Left = "left",
  Right = "right",
}

class RoverNavigationService {
  private _rover: Rover;
  private _plateau: Plateau;
  private static readonly cardinalDirectionMap = new Map([
    [
      CardinalDirections.North,
      { left: CardinalDirections.West, right: CardinalDirections.East },
    ],
    [
      CardinalDirections.East,
      { left: CardinalDirections.North, right: CardinalDirections.South },
    ],
    [
      CardinalDirections.South,
      { left: CardinalDirections.East, right: CardinalDirections.West },
    ],
    [
      CardinalDirections.West,
      { left: CardinalDirections.South, right: CardinalDirections.North },
    ],
  ]);
  private static readonly movementsMap = new Map([
    [CardinalDirections.North, { x: 0, y: 1 }],
    [CardinalDirections.East, { x: 1, y: 0 }],
    [CardinalDirections.South, { x: 0, y: -1 }],
    [CardinalDirections.West, { x: -1, y: 0 }],
  ]);

  constructor(rover: Rover, plateau: Plateau) {
    this._rover = rover;
    this._plateau = plateau;
  }

  executeCommand(command: Commands) {
    switch (command) {
      case Commands.Move:
        this.move();
        break;
      case Commands.RotateLeft:
        this.rotate(RotationDirections.Left);
        break;
      case Commands.RotateRight:
        this.rotate(RotationDirections.Right);
        break;
    }
  }

  private move() {
    const movement = RoverNavigationService.movementsMap.get(
      this._rover.position.cardinalDirection,
    );

    if (!movement) {
      throw new Error(
        "Invalid direction: Rover cannot move in that direction.",
      );
    }

    const newX = this._rover.position.x + movement.x;
    const newY = this._rover.position.y + movement.y;

    const newRoverPosition = new Position(
      newX,
      newY,
      this._rover.position.cardinalDirection,
    );
    const isRoverOffLimits = this._plateau.isOffLimits(newRoverPosition);

    if (isRoverOffLimits) {
      throw new Error(
        "Invalid movement: Rover would leave the Plateau limits.",
      );
    }

    this._rover.position = newRoverPosition;
  }

  private rotate(rotationDirection: RotationDirections) {
    const currentCardinalDirection =
      RoverNavigationService.cardinalDirectionMap.get(
        this._rover.position.cardinalDirection,
      );

    if (!currentCardinalDirection) {
      throw new Error(
        "Invalid direction: Rover cannot turn in that direction.",
      );
    }

    this._rover.position.cardinalDirection =
      currentCardinalDirection[rotationDirection];
  }
}

export default RoverNavigationService;
