import RoverNavigationService, {
  Commands,
} from "../../src/services/RoverNavigationService";
import Plateau from "../../src/entities/Plateau";
import Position, { CardinalDirections } from "../../src/entities/Position";
import Rover from "../../src/entities/Rover";
import Coordinates from "../../src/entities/Coordinates";

describe("RoverNavigationService", () => {
  const position = new Position(1, 2, CardinalDirections.North);
  const rover = new Rover(position);
  const minCoordinate = new Coordinates(0, 0);
  const maxCoordinate = new Coordinates(5, 5);
  const plateau = new Plateau(minCoordinate, maxCoordinate);
  const roverNavigationService = new RoverNavigationService(rover, plateau);

  it("should move rover", () => {
    const newRoverPosition = new Position(1, 3, CardinalDirections.North);

    roverNavigationService.executeCommand(Commands.Move);

    expect(rover.position).toEqual(newRoverPosition);
  });

  it("should rotate rover left", () => {
    roverNavigationService.executeCommand(Commands.RotateLeft);

    expect(rover.position.cardinalDirection).toEqual(CardinalDirections.West);
  });

  it("should rotate rover right", () => {
    roverNavigationService.executeCommand(Commands.RotateRight);

    expect(rover.position.cardinalDirection).toEqual(CardinalDirections.North);
  });

  it("should throw error when rover moves off limits", () => {
    rover.position = new Position(5, 5, CardinalDirections.North);

    expect(() => roverNavigationService.executeCommand(Commands.Move)).toThrow(
      "Invalid movement: Rover would leave the Plateau limits.",
    );
  });
});
